import './App.css';
import { useState } from 'react';

const Bulb = ({ light }) => {
  return (
    <div>
      {light === 'ON' ? (
        <h1 style={{ backgroundColor: 'orange' }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: 'gray' }}>OFF</h1>
      )}
    </div>
  );
};

const Counter = () => {
  const [count, setState] = useState(0);

  return (
    <>
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
};

function App() {
  const [light, setLight] = useState('OFF');

  return (
    <>
      <div>
        <Bulb light={light}></Bulb>
        <button
          onClick={() => {
            setLight(light === 'ON' ? 'OFF' : 'ON');
          }}
        >
          {light === 'ON' ? 'OFF' : 'ON'}
        </button>
      </div>
      <Counter />
    </>
  );
}

export default App;
