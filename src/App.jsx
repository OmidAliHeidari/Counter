import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const Increase = () => {
    const increase = counter + 1;
    setCounter(increase);
  };
  const Decrease = () => {
    const increase = counter - 1;
    setCounter(increase);
  };
  const SetZero = () => {
    const increase = 0;
    setCounter(increase);
  };
  return (
    <>
      <main>
        <div className="buttons">
          <button onClick={Increase}>+1</button>
          <button onClick={Decrease}>-1</button>
          <button onClick={SetZero}>Set 0</button>
        </div>
        <div className="counter">
          {counter}
        </div>
      </main>
    </>
  );
}

export default App;
