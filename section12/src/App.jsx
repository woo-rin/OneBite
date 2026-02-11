import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Diary from './Pages/Diary';
import New from './Pages/New';
import Notfound from './Pages/Notfound';

//1. "/" : 모든일기를 죄회하는 HOMe
//2. "/new": 새로운 일기를 작성하는 new
//3. "diary": 일기를 상세히 죄회하는 Diary

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav('/new');
  };
  return (
    <>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary'}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
