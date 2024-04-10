import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Loader2 } from "lucide-react";

const Icons = {
  spinner: Loader2,
};

function ChatLoadingMessage() {
  return (
    <div className={"flex self-start mr-20"}>
      <Avatar className="mr-4 h-8 w-8">
        <AvatarImage src="src/assets/avatar.jpg" />
        {/* <AvatarFallback>{message.author}</AvatarFallback> */}
      </Avatar>

      <Alert className={"flex-wrap p-2"}>
        <AlertDescription>
          <Icons.spinner className="h-4 w-4 animate-spin" />
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default ChatLoadingMessage;
