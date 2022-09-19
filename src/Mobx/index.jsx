import * as React from 'react';
import {Counter} from "./Counter";

export const Mobx = () => (
  <div>
    <h1>Mobx</h1>
    <Counter />
    <p>
      mobx@6.6.2 -
      MINIFIED - 57.8kB,
      MINIFIED + GZIPPED - 16.3kB,
      tree-shakeable,
      side-effect free,
      no dependencies
    </p>
    <p>
      mobx-react-lite@3.4.0 -
      MINIFIED - 6.2kB,
      MINIFIED + GZIPPED - 2.2kB,
      tree-shakeable,
      no dependencies
    </p>
    <hr/>
  </div>
);
