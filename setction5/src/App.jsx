import './App.css';
import { useState } from 'react';

function App() {
  const [count, setState] = useState(0);
  const [light, setLight] = useState('off');

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === 'ON' ? 'OFF' : 'ON');
          }}
        >
          {light === 'ON' ? 'OFF' : 'ON'}
        </button>
      </div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setState(count + 1);
        }}
      >
        +
      </button>
    </>
  );
}

export default App;
