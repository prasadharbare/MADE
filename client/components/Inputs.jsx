import React from "react";
import { Button, Input } from "@heroui/react";
import { SendHorizontalIcon } from "lucide-react";

function Inputs() {
  return (
    <div className="absolute bottom-0 left-0 w-full sm:mb-5 flex sm:gap-1">
      <Input type="text" label="Enter your message" />
      <Button className="h-auto bg-blue-400">
        <SendHorizontalIcon />
      </Button>
    </div>
  );
}

export default Inputs;