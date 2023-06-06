import { useState } from 'react';
import './App.css';

function App() {
  const[ counter, setCounter] = useState(0); 
  
  function increment() {
       setCounter(counter + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <label>{counter}</label>
      <button onClick={increment}>+</button>
   </div>
  );
}

export default App;
