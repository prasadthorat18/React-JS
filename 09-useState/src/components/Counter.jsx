import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
//   const [down, setDown] = useState(0);

  function IncreaseChanges() {
    setValue(value + 1);
  }
  function DecreaseChanges() {
    setValue(value - 1);
  }
  function Jump100_Plus (){
    setValue(value+100)
  }
  function Jump100_Minus (){
    setValue(value - 100)
  }

  return (
    <div>
      <h1 className="counter">{value}</h1>
      <button onClick={Jump100_Minus}>Decrease 100</button>
      <button onClick={IncreaseChanges}>Increase</button>
      <button onClick={DecreaseChanges}>Decrease</button>
      <button onClick={Jump100_Plus}>Increase 100</button>
    </div>
  );
};

export default Counter;
