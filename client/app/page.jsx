"use client";
import { HeroUIProvider } from "@heroui/react";
import { Messages, Inputs, SignUp } from "@/components";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io(
  "https://refactored-rotary-phone-5g4x69w5vxrvh4p96-8000.app.github.dev"
);

export default function Home() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("new_message", (msg) => {
      setMessages((prevState) => [...prevState, msg]);
    });
  }, []);

  return (
    <HeroUIProvider>
      <div className="min-h-screen max-h-screen bg-gradient-to-r from-[#fbed96] to-[#abecd6]">
        {user ? (
          <div className="container mx-auto relative min-h-screen p-4">
            <Messages messages={messages} id={socket.id} />
            <Inputs socket={socket} name={user} setMessages={setMessages} />
          </div>
        ) : (
          <SignUp setUser={setUser} socket={socket} />
        )}
      </div>
    </HeroUIProvider>
  );
}