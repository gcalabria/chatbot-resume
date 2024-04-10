import {
  CHUNK_SIZE,
  SEPARATORS,
  CHUNK_OVERLAP,
  OPENAI_KEY,
  SUPABASE_PROJECT_URL,
  SUPABASE_API_KEY,
  SUPABASE_TABLE_NAME,
} from "@/constants";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "@langchain/openai";
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { createClient } from "@supabase/supabase-js";
import {
  RunnablePassthrough,
  RunnableSequence,
} from "@langchain/core/runnables";
import { combineDocuments } from "./utils";

const embeddings = new OpenAIEmbeddings({ openAIApiKey: OPENAI_KEY });

const supabaseClient = createClient(SUPABASE_PROJECT_URL, SUPABASE_API_KEY);

const vectorStore = new SupabaseVectorStore(embeddings, {
  client: supabaseClient,
  tableName: SUPABASE_TABLE_NAME,
});

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: CHUNK_SIZE,
  separators: SEPARATORS,
  chunkOverlap: CHUNK_OVERLAP,
});

const llm = new ChatOpenAI({ openAIApiKey: OPENAI_KEY });

// prompt template
const standaloneQuestionTemplate =
  "Given a question, convert it into a standalone question. Question: {question} Standalone question:";

// answer template
const answerTemplate = `
You are a helpful and enthusiastic support bot who can answer a given
question about Guilherme Calabria Lopes, a computer scientist
specialized in AI Engineering. Try to find the answer in the context.
If you really do not know the answer, then say "I am sorry, I do not
know the answer for that." Do not try to make up an answer. Speak as
if you were chatting to a friend.
context: {context}
question: {question}
answer:
`;

const answerPrompt = PromptTemplate.fromTemplate(answerTemplate);

// prompt
const standaloneQuestionPrompt = PromptTemplate.fromTemplate(
  standaloneQuestionTemplate
);

// retriever
const retriever = vectorStore.asRetriever();

// chains
const standaloneQuestionChain = standaloneQuestionPrompt
  .pipe(llm)
  .pipe(new StringOutputParser());
const retrieverChain = RunnableSequence.from([
  (prevResult) => prevResult.standalone_question,
  retriever,
  combineDocuments,
]);
const answerChain = answerPrompt.pipe(llm).pipe(new StringOutputParser());

// link up chain with .pipe methods
const chain = RunnableSequence.from([
  {
    standalone_question: standaloneQuestionChain,
    original_input: new RunnablePassthrough(),
  },
  {
    context: retrieverChain,
    question: ({ original_input }) => original_input.question,
  },
  answerChain,
]);

export { splitter, embeddings, chain, retriever };
