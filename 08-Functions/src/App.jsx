import React from "react";
import Timepass from "./components/timepass";

const App = () => {
  function btnClicked() {
    console.log("Button is Clicked");
  }

  function mouseEnter() {
    console.log("mouse on btn");
  }

  function userTyping(elem) {
    console.log(elem.target.value);
  }
  return (
    <div>
      <div className="fy">
        <h1>Hello, Sarthak</h1>

        <button
          onMouseEnter={mouseEnter}
          onDoubleClick={() => {
            console.log("hey guys");
          }}
        >
          Change user
        </button>
      </div>

      <input onChange={userTyping} type="text" placeholder="Enter name" />

      <Timepass />
    </div>
  );
};

export default App;
