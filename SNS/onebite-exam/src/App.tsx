import "./App.css";

function App() {
  return (
    <div>
      {/* 1.타이포그래픽 */}
      <div className="text-xs text-red-500">text-css</div>
      <div className="text-sm text-[rgb(100,30,200)]">text-css</div>
      <div className="text-lg font-bold">text-css</div>
      <div className="text-xl font-black">text-css</div>
      <div className="text-2xl font-extrabold">text-css</div>
      <div className="text-[13px]">text-css</div>
      {/* 2.백그라운드 컬러 */}
      <div className="bg-amber-500">amber-500</div>
      {/* 3. 사이즈*/}
      <div className="h-20 w-full bg-blue-500">dd</div>
      {/* 4. 여백 */}
      <div className="m-5 h-50 w-50 bg-red-400 p-5">
        <div className="h-full w-full bg-blue-500">dlxjsjf tbrj</div>
      </div>
    </div>
  );
}

export default App;
