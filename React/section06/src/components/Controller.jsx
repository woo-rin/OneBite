const Controller = ({ onClickButton }) => {
  return (
    <div>
      <button onClick={() => onClickButton(-100)}>-100</button>
      <button onClick={() => onClickButton(-10)}>-10</button>
      <button onClick={() => onClickButton(-1)}>-1</button>
      <button className="reset-btn" onClick={() => onClickButton(0)}>Reset</button>
      <button onClick={() => onClickButton(+1)}>+1</button>
      <button onClick={() => onClickButton(+10)}>+10</button>
      <button onClick={() => onClickButton(+100)}>+100</button>
    </div>
  );
};

export default Controller;
