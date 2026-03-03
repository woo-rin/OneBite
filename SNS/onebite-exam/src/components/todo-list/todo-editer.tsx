import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useCreateTodo } from "@/store/todos";

export default function TodoEditor() {
  const { createTodo } = useCreateTodo();
  const [content, setContent] = useState("");

  const handAddclick = () => {
    if (content.trim() === "") return;
    createTodo(content);
    setContent("");
  };

  return (
    <div className="flex gap-2">
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="할일을 추가하세요 ..."
      />
      <Button onClick={handAddclick}>+</Button>
    </div>
  );
}
