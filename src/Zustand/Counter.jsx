import * as React from 'react';
import {useStore} from "./useStore";

export const Counter = () => {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
