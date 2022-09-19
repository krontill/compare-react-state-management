import * as React from 'react';
import {useCounterState} from "./useCounterState";

export const Counter = () => {
  const {count, increment, decrement} = useCounterState();

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
