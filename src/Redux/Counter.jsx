import * as React from 'react';
import {container} from "./container";

const CounterComponent = ({count, increment, decrement}) => (
  <div>
    <button onClick={() => decrement()}>-</button>
    <span>{count}</span>
    <button onClick={() => increment()}>+</button>
  </div>
);

export const Counter = container(CounterComponent);
