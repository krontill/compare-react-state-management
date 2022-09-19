import {Unstated} from "./Unstated";
import {Zustand} from "./Zustand";
import {Effector} from "./Effector";
import {Recoil} from "./Recoil";

function App() {
  return (
    <div>
      <ul>
        <li>Redux - https://github.com/reduxjs/redux</li>
        <li>Redux Toolkit - https://github.com/reduxjs/redux-toolkit</li>
        <li>Mobx - https://github.com/mobxjs/mobx</li>
        <li>Recoil - https://github.com/facebookexperimental/Recoil</li>
        <li>Effector - https://github.com/effector/effector</li>
        <li>Unstated - https://github.com/jamiebuilds/unstated</li>
        <li>Zustand - https://github.com/pmndrs/zustand</li>
      </ul>
      <div>
        <Recoil />
        <Effector/>
        <Unstated/>
        <Zustand/>
      </div>
    </div>
  );
}

export default App;
