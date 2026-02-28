import { Toast } from "radix-ui";
import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { cn } from "./lib/utils";
import { toast, Toaster } from "sonner";

function App() {
  const isActive = false;
  return (
    <div className="p-5">
      <Toaster></Toaster>
      <Textarea />
      <Input placeholder="입렫" />
      <Button
        onClick={() => {
          toast("dd", { position: "bottom-center" });
        }}
      >
        버툰
      </Button>
      <Button variant={"destructive"}>no</Button>
      <Button variant={"ghost"}>no</Button>
      <Button variant={"link"}>no</Button>
      <Button variant={"secondary"}>no</Button>
      <div
        className={cn(
          "w-10 text-2xl",
          isActive ? "text-green-500" : "text-red-500",
        )}
      >
        smrmaaks
      </div>

      <div className="text-primary">dd</div>
      <div className="text-muted">muted</div>
      <div className="text-destructive">ddd</div>
    </div>
  );
}

export default App;
