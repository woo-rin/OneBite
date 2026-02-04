import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import './App.css';
import { useState, useEffect } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  //1.마운트: 탄생
  useEffect(() => {
    console.log('mount');
  }, []);

  //2.업데이트: 변화, 리렌더링
  useEffect(() => {
    console.log('update');
  });

  //3.언마운트: 죽음

  //의존성 배열
  //deps

  const onClickButton = (value) => {
    if (value === 0) {
      setCount(0);
    } else {
      setCount(count + value);
    }
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
