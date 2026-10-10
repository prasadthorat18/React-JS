import React, { useEffect, useState } from "react";
import Example2 from "./components/Example2";

const App = () => {
  function random() {
    let a = Math.floor(Math.random() * 10);
    console.log(a);
  }
  // random();

  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);

  useEffect(function () {
    console.log("Use Effect is running while mouse on btn");
  } , [num]);

  return (
    <div>
      <h1>num is {num} </h1>  {/*  useEffect working fine like a wine */}
      <h1>num2 is {num2} </h1>  {/* for this usEffect doesnt work */}
      <button
        onMouseEnter={() => {
          setNum(num + 1);
        }}
        onMouseLeave={() => {
          setNum2(num2 + 10);
        }}
      >
        Click me 
      </button>

      <hr /><hr />

      <Example2 />
    </div>
  );
};

export default App;
