import './App.css'
import Button from './components/Button'

function App(){
  const buttonprops = {
    text: "메일",
    color: "red",
    a:1,
    b:2,
  };
  return(
    <>
      <Button {...buttonprops}/>
      <Button text={"cafe"}/>
      <Button text={"blog"}>
        <div>자식요소</div>
      </Button >
    </>
  );
}

export default App
