import * as React from 'react';
import {Counter} from "./Counter";

export const Zustand = () => (
  <div>
    <h1>Zustand</h1>
    <Counter/>
    <p>
      MINIFIED - 3kB,
      MINIFIED + GZIPPED - 1.1kB,
      side-effect free, 1 dependency
    </p>
    <p>
      Создается store и используется в компоненте как хук.
      Минимум размера, использует хуки, а не классы, нет boilerplate кода, не надо оборачивать в провайдеры.
      Есть middleware, например subscribe для прослушивания изменений.
      Если состояние большой вложенный объект можно прикрутить библиотеки типа immer.
      Можно использовать с Redux devtools. Есть набор сторонних библиотек расширяющих функционал.
      Можно использовать с React.js, TypeScript и Vanilla.js (будут не хуки, а "api utilities").
    </p>
    <hr/>
  </div>
);
