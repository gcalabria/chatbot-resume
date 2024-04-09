import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Message } from "@/interfaces";

interface ChatEntryProps {
  message: Message;
}

function ChatEntry({ message }: ChatEntryProps) {
  return (
    <div
      className={
        "flex" +
        (message.author === "BOT" ? " self-start mr-20" : " self-end ml-20")
      }
    >
      {message.author === "BOT" && (
        <Avatar className="mr-4 h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>{message.author}</AvatarFallback>
        </Avatar>
      )}
      <Alert
        className={
          "flex-wrap p-2" +
          (message.author === "BOT" ? " " : " text-black bg-white")
        }
      >
        <AlertDescription>{message.text}</AlertDescription>
      </Alert>
    </div>
  );
}

export default ChatEntry;
