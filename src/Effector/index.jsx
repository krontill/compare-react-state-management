import * as React from 'react';
import {Counter} from "./Counter";

export const Effector = () => (
  <div>
    <h1>Effector</h1>
    <Counter/>
    <p>
      effector@22.3.0 -
      MINIFIED - 23.8kB,
      MINIFIED + GZIPPED - 10kB,
      side-effect free, no dependencies
    </p>
    <p>
      effector-react@22.3.0 -
      MINIFIED - 9.6kB,
      MINIFIED + GZIPPED - 3.6kB,
      tree-shakeable,
      side-effect free,
      1 dependency
    </p>
    <p>
      Создается store с дефолтным значением. Создаются events, которые работают с этим store и описывают как менять
      состояние, далее они импортируются в компонент. Для чтения значения из store используется хук useStore.
    </p>
    <p>
      Дополнительно есть Effect это контейнер для сайд-эффектов, возможно асинхронных.
      В комплекте имеет ряд заранее созданных эвентов и сторов, облегчающих стандартные действия.
      Также Reducer вычисляет новое состояние, учитывая предыдущее состояние и данные из события.
      Есть подписки, вотчеры и хуки для различных случаев.
    </p>
    <p>
      Есть набор сторонних библиотек расширяющих функционал.
      Можно использовать с Redux devtools.
      Мотивация для создания этой библиотеки - разделить бизнес логику и UI логику.
      Работает с любыми UI и серверными фреймворками (SSR), можно использовать с React, TypeScript, Vue, Svelte.
    </p>
    <hr/>
  </div>
);
