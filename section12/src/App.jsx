import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Diary from './Pages/Diary';
import New from './Pages/New';
import Notfound from './Pages/Notfound';

import { genEmotionImage } from './util/get-emtion-image';

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
        <img src={genEmotionImage(1)} />
        <img src={genEmotionImage(2)} />
        <img src={genEmotionImage(3)} />
        <img src={genEmotionImage(4)} />
        <img src={genEmotionImage(5)} />
      </div>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary'}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
