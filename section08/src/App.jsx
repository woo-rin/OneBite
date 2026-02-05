import Header from './components/Header';
import { useState } from 'react';
import Editor from './components/Editor';
import List from './components/List';
import './App.css';
function App() {
  const mockData = [
    {
      id: 0,
      isDone: false,
      content: 'React study',
      date: new Date().getTime(),
    },
    {
      id: 1,
      isDone: false,
      content: 'RUNNING',
      date: new Date().getTime(),
    },
    {
      id: 0,
      isDone: false,
      content: 'study',
      date: new Date().getTime(),
    },
  ];
  const [todos, SetTodos] = useState(mockData);
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
