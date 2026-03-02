import Viwewr from "@/components/ui/counter/viewer";
import Controller from "@/components/ui/counter/cntroller";

export default function Counter() {
  return (
    <div className="text-4xl font-bold">
      counter
      <Viwewr />
      <Controller />
    </div>
  );
}
