import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // count starts at 0

  const increase = () => {
    setCount(count + 1); // update the count
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div >
  );
}

export default Counter;
