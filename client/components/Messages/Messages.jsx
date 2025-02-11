import Chat from "./Chat";

function Messages({ id, messages }) {
  return (
    <div className="flex gap-1 flex-col">
      {messages.map((message, idx) => (
        <Chat key={idx} message={message} self={message.user.id === id} />
      ))}
    </div>
  );
}

export default Messages;