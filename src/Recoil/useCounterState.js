import {atom, useRecoilState} from "recoil";

export const counterState = atom({
  key: 'counter',
  default: 0,
});

export const useCounterState = () => {
  const [count, setCount] = useRecoilState(counterState);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return {count, increment, decrement};
};
