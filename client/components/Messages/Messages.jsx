import Chat from "./Chat";
import NewUser from "./NewUser";

function Messages({ id, messages }) {
  return (
    <div className="flex gap-1 flex-col min-h-[80vh] max-h-[80vh] overflow-scroll p-5 no-scrollbar">
      {messages.map((message, idx) =>
        message.type === "user" ? (
          <NewUser key={idx} name={message.content} />
        ) : (
          <Chat key={idx} message={message} self={message.user.id === id} />
        )
      )}
    </div>
  );
}

export default Messages;