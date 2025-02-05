import React, { useRef, useState } from "react";
import { Button, Input } from "@heroui/react";
import { SendHorizontalIcon, UploadIcon } from "lucide-react";

function Inputs() {
  const [input, setInput] = useState("");
  const inputUpload = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(input);

    inputUpload.current.click();

    setInput("");
  };

  return (
    <form
      className="absolute bottom-0 left-0 w-full sm:mb-5 flex sm:gap-1"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        label="Enter your message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoComplete="off"
      />

      <input type="file" name="file" ref={inputUpload} hidden />

      <Button className="h-auto bg-blue-400" type="submit">
        {input ? <SendHorizontalIcon /> : <UploadIcon />}
      </Button>
    </form>
  );
}

export default Inputs;