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
    <p>
      Создаем класс и в нем указываем состояние и экшены как методы этого класса.
      Компоненты, в которых используем состояние и экшены надо обернуть в observer,
      чтобы они автоматически обнаружили что зависят от наблюдаемого состояния.
    </p>
    <p>
      Помимо State и Actions в MobX есть еще понятие Derivations(производные).
      Производные это вычисленные значения из текущего состояния (computed) или побочные эффекты (reactions).
      Можно использовать с React и другими фреймворками, MobX не ограничивает.
    </p>
    <hr/>
  </div>
);
