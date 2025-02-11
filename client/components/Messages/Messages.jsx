import Chat from "./Chat";

function Messages({ id, messages }) {
  return (
    <div className="flex gap-1 flex-col min-h-[80vh] max-h-[80vh] overflow-scroll p-5 no-scrollbar">
      {messages.map((message, idx) => (
        <Chat key={idx} message={message} self={message.user.id === id} />
      ))}
    </div>
  );
}

export default Messages;