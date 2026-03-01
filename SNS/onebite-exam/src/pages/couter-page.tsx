import { usecountStore } from "@/store/count";
import { Button } from "@/components/ui/button";

export default function Counter() {
  const { count, increase, decrease } = usecountStore();
  return (
    <div>
      <div>{count}</div>
      <div>
        <Button onClick={decrease}>-</Button>
        <Button onClick={increase}>+</Button>
      </div>
    </div>
  );
}
