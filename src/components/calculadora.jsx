import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculadora, setCalculadora] = useState(0);

  useEffect(() => {
    setCalculadora(() => count * 100);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <h1>Calculation: {calculadora}</h1>
    </div>
    
  );
}

export default Counter