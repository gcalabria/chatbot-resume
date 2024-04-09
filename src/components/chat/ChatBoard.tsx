import { useState } from "react";
import { Input } from "@/components/ui/input";
import ChatMessage from "./ChatMessage";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fakeMessages } from "@/mocks";
import { Message } from "@/interfaces";

function ChatBoard() {
  const [messages] = useState<Message[]>(fakeMessages);

  let content;
  if (messages.length === 0) {
    content = <p>No messages</p>;
  } else {
    content = messages.map((msg) => <ChatMessage key={msg.id} message={msg} />);
  }

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col flex-grow gap-4 p-2 overflow-auto ">
        {content}
      </div>
      <div className="flex flex-row items-center p-2 border-t-2">
        <Input
          placeholder="Ask me something..."
          id="chatInput"
          className="mr-2"
        />
        <Button variant="outline" size="icon">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default ChatBoard;
