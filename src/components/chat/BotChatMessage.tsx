import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Message } from "@/interfaces";
import Markdown from "react-markdown";
import { Prism } from "react-syntax-highlighter";
import { dracula as dark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
        <AlertDescription>
          <Markdown
            children={message.text}
            components={{
              code(props) {
                const { children, className, node, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <Prism
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    style={dark}
                  />
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default BotChatMessage;
