import Header from './components/Header';
import { useState, useRef } from 'react';
import Editor from './components/Editor';
import List from './components/List';
import './App.css';
function App() {
  const mockData = [
    {
      id: 0,
      isDone: false,
      content: '리액트 공부 study',
      date: new Date().getTime(),
    },
    {
      id: 1,
      isDone: false,
      content: 'RUNNING',
      date: new Date().getTime(),
    },
    {
      id: 2,
      isDone: false,
      content: 'study',
      date: new Date().getTime(),
    },
  ];
  const [todos, SetTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    SetTodos([newTodo, ...todos]);
  };
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
}

export default App;
