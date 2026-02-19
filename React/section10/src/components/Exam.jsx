import { useReducer } from 'react';
function reducer(state, action) {
  console.log(state, action);
  if (action.type === 'INCREASE') {
    return state + action.data;
  } else if (action.type === 'jack') {
    return state - action.data;
  }
}
const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  const onclickMinus = () => {
    dispatch({
      type: 'jack',
      data: 1,
    });
  };
  const onclickplus = () => {
    dispatch({
      type: 'INCREASE',
      data: 1,
    });
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onclickplus}>+</button>
      <button onClick={onclickMinus}>-</button>
    </div>
  );
};

export default Exam;
