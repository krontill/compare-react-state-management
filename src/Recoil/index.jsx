import * as React from 'react';
import {RecoilRoot} from 'recoil';
import {Counter} from "./Counter";

export const Recoil = () => (
  <div>
    <h1>Recoil</h1>
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
    <p>
      MINIFIED - 78kB,
      MINIFIED + GZIPPED - 23kB,
      tree-shakeable,
      1 dependency
    </p>
    <hr/>
  </div>
);
