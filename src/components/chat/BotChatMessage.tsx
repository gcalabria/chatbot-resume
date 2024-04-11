import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Message } from "@/interfaces";

interface BotChatMessageProps {
  message: Message;
}

function BotChatMessage({ message }: BotChatMessageProps) {
  return (
    <div className="flex self-start mr-20">
      <Avatar className="mr-4 h-8 w-8">
        <AvatarImage src="src/assets/avatar.jpg" />
        <AvatarFallback>{message.author}</AvatarFallback>
      </Avatar>

      <Alert className="flex-wrap p-2">
        <AlertDescription>{message.text}</AlertDescription>
      </Alert>
    </div>
  );
}

export default BotChatMessage;
