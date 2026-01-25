import Viewer from './components/viwer';
import Controller from './components/Controller';
import './App.css';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const onClickButton = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <h1>simple counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
