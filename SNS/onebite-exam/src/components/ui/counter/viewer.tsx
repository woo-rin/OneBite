import { useCount, usecountStore } from "@/store/count";

export default function Viwewr() {
  const count = useCount();
  return <div>{count}</div>;
}
