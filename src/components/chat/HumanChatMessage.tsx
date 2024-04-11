import { Alert, AlertDescription } from "@/components/ui/alert";
import { Message } from "@/interfaces";

interface HumanChatMessageProps {
  message: Message;
}

function HumanChatMessage({ message }: HumanChatMessageProps) {
  return (
    <div className="flex self-end ml-20">
      <Alert className="flex-wrap p-2 text-black bg-white">
        <AlertDescription>{message.text}</AlertDescription>
      </Alert>
    </div>
  );
}

export default HumanChatMessage;
