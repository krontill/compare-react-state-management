import {createEvent, createStore} from 'effector';

export const increment = createEvent();
export const decrement = createEvent();

export const $counter = createStore(0).on(increment, n => n + 1).on(decrement, n => n - 1);
