import React, { useState } from 'react';
import DisplayComponent from './DisplayComponent';

const DisplayComponent = ({ count }) => {
  return <p>Count: {count}</p>;
};

const ContainerComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <DisplayComponent count={count} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default ContainerComponent;