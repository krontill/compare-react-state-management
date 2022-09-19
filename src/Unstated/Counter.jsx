import * as React from 'react';
import {Subscribe} from 'unstated';
import {CounterContainer} from "./CounterContainer";

export const Counter = () => (
  <Subscribe to={[CounterContainer]}>
    {counter => (
      <div>
        <button onClick={() => counter.decrement()}>-</button>
        <span>{counter.state.count}</span>
        <button onClick={() => counter.increment()}>+</button>
      </div>
    )}
  </Subscribe>
);
