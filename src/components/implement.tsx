import { useState } from "react";

function Implement() {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
    console.log(num);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
          <div>{num}回押しました。</div>
          <button type="button" onClick={increment}>
            増やす
          </button>
        </div>
      </header>
    </div>
  );
}

export default Implement;
