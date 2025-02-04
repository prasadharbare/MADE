"use client";
import { HeroUIProvider } from "@heroui/react";
import Emoji from "@/component/Emoji";

export default function Home() {
  return (
    <HeroUIProvider>
      <Emoji />
    </HeroUIProvider>
  );
}