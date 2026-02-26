import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div>
      <Button>버툰</Button>
      <div className="text-primary">dd</div>
      <div className="text-muted">muted</div>
      <div className="text-destructive">ddd</div>
    </div>
  );
}

export default App;
