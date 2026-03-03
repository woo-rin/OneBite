import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function TodoEditor() {
  return (
    <div className="flex gap-2">
      <Input placeholder="할일을 추가하세요 ..." />
      <Button>+</Button>
    </div>
  );
}
