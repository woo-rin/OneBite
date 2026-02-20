import './App.css';
import { useReducer, useRef, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Diary from './Pages/Diary';
import New from './Pages/New';
import Notfound from './Pages/Notfound';
import Edit from './Pages/edit';

// import { genEmotionImage } from './util/get-emtion-image';

//1. "/" : 모든일기를 죄회하는 HOMe
//2. "/new": 새로운 일기를 작성하는 new
//3. "diary": 일기를 상세히 죄회하는 Diary

const mockData = [
  {
    id: 1,
    cretedDate: new Date().getTime(),
    emotionId: 1,
    content: '일기내용1',
  },
  {
    id: 2,
    cretedDate: new Date().getTime(),
    emotionId: 2,
    content: '일기내용2',
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) =>
        String(item.id) === String(action.id) ? action.data : item,
      );
    case 'DELETE':
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef();

  //새로운 일기 추가
  const onCreate = (cretedDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        cretedDate,
        emotionId,
        content,
      },
    });
  };
  //기존 일기 수정
  const onUpate = (id, cretedDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        cretedDate,
        emotionId,
        content,
      },
    });
  };

  //기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onDelete,
            onUpate,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
