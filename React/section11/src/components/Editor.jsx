import { useState, useRef, useContext } from 'react';
import './Editor.css';
import { TodoDispatchContext } from '../App';
const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState('');
  const contentRef = useRef('');
  const onChangeConstent = (e) => {
    setContent(e.target.value);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onsubmit();
    }
  };
  const onsubmit = () => {
    if (content === '') {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };
  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onChange={onChangeConstent}
        onKeyDown={onKeyDown}
        placeholder="새로운 todo..."
      ></input>
      <button onClick={onsubmit}>추가</button>
    </div>
  );
};
export default Editor;
