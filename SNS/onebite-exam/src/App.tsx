import "./App.css";
import { Button } from "./components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { cn } from "./lib/utils";
import { toast, Toaster } from "sonner";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog";
import { ChefHat } from "lucide-react";
function App() {
  const isActive = false;
  return (
    <div className="p-5">
      <ChefHat className="h-10 w-10 bg-red-100" />
      <AlertDialog>
        <AlertDialogTrigger>Open Alert Dialog</AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogTitle>Tilw</AlertDialogTitle>
          <AlertDialogDescription>dddd</AlertDialogDescription>
          <div>body</div>
          <div>
            <AlertDialogAction
              onClick={() => {
                console.log("니ㅣ");
              }}
            >
              confrom
            </AlertDialogAction>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog>
        <DialogTrigger>open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>title</DialogTitle>
            <DialogDescription>Descripton</DialogDescription>
          </DialogHeader>
          <div>Bod</div>
        </DialogContent>
      </Dialog>

      <Popover>
        <PopoverTrigger asChild>
          <Button>ss</Button>
        </PopoverTrigger>
        <PopoverContent>dd</PopoverContent>
      </Popover>
      <Carousel className="mx-10">
        <CarouselContent>
          <CarouselItem className="basis-1/3">w</CarouselItem>
          <CarouselItem className="basis-1/3">2</CarouselItem>
          <CarouselItem className="basis-1/3">3</CarouselItem>
          <CarouselItem className="basis-1/3">4</CarouselItem>
          <CarouselItem>5</CarouselItem>
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
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
