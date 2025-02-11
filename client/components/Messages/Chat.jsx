import { Card, CardBody, Avatar } from "@heroui/react";

function Chat({ message, self }) {
  return (
    <div>
      <Card className={`w-fit bg-transparent ${self && "bg-blue-300 ml-auto"}`}>
        <CardBody className="flex flex-row items-center gap-1">
          {!self && <Avatar name={message.user.name.toUpperCase()} />}
          <p>
            {message.type === "link" ? (
              <a
                href={message.content}
                target="_blank"
                className="underline"
                rel="noopener noreferrer nofollow"
              >
                {message.content}
              </a>
            ) : (
              message.content
            )}
          </p>
        </CardBody>
      </Card>
    </div>
  );
}

export default Chat;