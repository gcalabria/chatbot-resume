# Chatbot resume

A resume in the form of a chatbot.

# Pipeline
1. Take user input
2. Transform it into a standalone question
3. Create an embedding for the standalone question
4. Compare the embedding of the standalone question with the embeddings in the vector store and retrieve the most similar
5. Use the retrieved documens, the original user input and the conversation history to create an answer