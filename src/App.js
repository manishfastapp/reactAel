import React from "react";
import { Counter } from "./features/counter/Counter";
import SideFIlters from "./components/filters/SideFIlters";
import DisplayInfo from "./components/maincomponents/DisplayInfo";
import PriceForm from "./components/maincomponents/PriceForm";
import Kp1 from "./components/maincomponents/Kp1";
import Kp2 from "./components/maincomponents/Kp2";
import Kp3 from "./components/maincomponents/Kp3";
import Kp4 from "./components/maincomponents/Kp4";
import "./App.css";
import "./style/mainComp.css";
import "./index.css";

function App() {
  return (
    <div className="Ael">
      <SideFIlters />
      <div className="main">
        <div className="infogrid">
          <div>
            <PriceForm />
          </div>
          <div>
            <DisplayInfo />
            {/* <Kp4 /> */}
          </div>
          <div className="kps">
            <Kp1 />
            <Kp2 />
            <Kp3 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;