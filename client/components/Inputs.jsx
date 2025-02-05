import React, { useRef, useState } from "react";
import { Button, Input } from "@heroui/react";
import { SendHorizontalIcon, UploadIcon } from "lucide-react";

function Inputs() {
  const [input, setInput] = useState("");
  const inputUpload = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "image/webp"
    ) {
      console.log("Image is supported!");
      console.log(file);

      const reader = new FileReader();

      reader.onloadend = function () {
        // Here is the Base64 string
        const base64String = reader.result;
        console.log(base64String); // Base64 URI
      };

      if (file) {
        reader.readAsDataURL(file); // Converts image to base64 URI
      }

      // const url = URL.createObjectURL(file);
      // console.log(url);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      inputUpload.current.click();
    } else {
      console.log(input);
      setInput("");
    }
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

      <input
        type="file"
        name="file"
        ref={inputUpload}
        hidden
        onChange={handleFileUpload}
      />

      <Button className="h-auto bg-blue-400" type="submit">
        {input ? <SendHorizontalIcon /> : <UploadIcon />}
      </Button>
    </form>
  );
}

export default Inputs;