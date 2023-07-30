import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    if (counter > 0) { setCounter(counter - 1) }

  }

  return (
    <div className='container'>
      <button onClick={decrement}>-</button>
      <label>Counter  {counter}</label>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;



