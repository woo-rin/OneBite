import './App.css';
import Button from './components/button';
import Header from './components/Header';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Diary from './Pages/Diary';
import New from './Pages/New';
import Notfound from './Pages/Notfound';

// import { genEmotionImage } from './util/get-emtion-image';

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
      <Header
        title={'Header'}
        lefchild={<Button></Button>}
        rightchild={<Button></Button>}
      />
      <Button text={'123'} type={'DEFAULT'} />
      <Button text={'456'} type={'POSTIVE'} />
      <Button text={'789'} type={'NEGATIVE'} />
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
