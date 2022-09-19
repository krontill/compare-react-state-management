import * as React from 'react';
import {useStore} from 'effector-react'
import {$counter, decrement, increment} from "./store";

export const Counter = () => {
  const counter = useStore($counter);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
