import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  function IncreamentValue() {
    if (counter < 20) {
      console.log(`Incremnt Counter ${counter}`);
      setCounter(counter + 1);
    }
  }

  function DecrementValue() {
    if (counter > 0) {
      console.log(`Decrement Counter ${counter}`);
      setCounter(counter - 1);
    }
  }

  return (
    <section className="container">
      <h2>{counter}</h2>
      <div>
        <button onClick={IncreamentValue}>
          Incremnt Counter <span>{counter}</span>
        </button>
        <button onClick={DecrementValue}>
          Decrement Counter <span>{counter}</span>
        </button>
      </div>
    </section>
  );
}
export default App;
