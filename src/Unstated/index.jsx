import * as React from 'react';
import {Provider} from 'unstated';
import {Counter} from "./Counter";

export const Unstated = () => (
  <div>
    <h1>Unstated</h1>
    <Provider>
      <Counter />
    </Provider>
    <p>
      MINIFIED - 5.3kB,
      MINIFIED + GZIPPED - 1.8kB,
      tree-shakeable, 1 dependency
    </p>
    <hr/>
  </div>
);
