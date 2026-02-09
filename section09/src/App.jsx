import Header from './components/Header';
import { useState, useRef, useReducer } from 'react';
import Editor from './components/Editor';
import List from './components/List';
import Exam from './components/Exam';
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
  const onUpdate = (targetId) => {
    SetTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };
  const onDelete = (targetId) => {
    SetTodos(todos.filter((todo) => todo.id !== targetId));
  };
  return (
    <div className="App">
      <Exam />
      {/* <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} /> */}
    </div>
  );
}

export default App;
