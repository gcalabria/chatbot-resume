import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import ChatMessage from "./ChatMessage";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Message } from "@/interfaces";
import ChatLoadingMessage from "./ChatLoadingMessage";
import { getAnswer } from "@/api";

function ChatBoard() {
  const [messages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(
      () =>
        messagesEndRef.current?.scrollIntoView({
          behavior: "smooth",
        }),
      0
    );
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputMessage(event.currentTarget.value);
  };

  const handleSendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    messages.push({
      id: `${messages.length + 1}`,
      author: "HUMAN",
      text: inputMessage,
    });
    setInputMessage("");
    scrollToBottom();

    const answer = await getAnswer({ question: inputMessage });

    messages.push({
      id: `${messages.length + 1}`,
      author: "BOT",
      text: answer,
    });

    setIsLoading(false);
    scrollToBottom();
  };

  let content;
  if (messages.length === 0) {
    content = (
      <div className="flex flex-col flex-grow items-center justify-center">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Ask me anything about my career :)
        </h2>
      </div>
    );
  } else {
    content = messages.map((msg) => <ChatMessage key={msg.id} message={msg} />);
  }

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col flex-grow gap-4 p-2 overflow-auto ">
        {content}
        {isLoading && <ChatLoadingMessage />}
        <div ref={messagesEndRef} />
      </div>
      <form
        className="flex flex-row items-center px-2 py-4 border-t-2"
        onSubmit={handleSendMessage}
      >
        <Input
          placeholder="Ask me something..."
          id="chatInput"
          className="mr-2"
          onChange={handleInputChange}
          value={inputMessage}
        />
        <Button type="submit" variant="outline" size="icon">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}

export default ChatBoard;
