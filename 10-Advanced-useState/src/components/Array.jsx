import React, { useState } from "react";

const Array = () => {
  const [num, setNum] = useState([10, 20, 30, 40]);

  function btnclicked() {
    let newArray = [...num];
    console.log(newArray);

    if (!newArray.includes(50)) {
      newArray.push(50);
    }
    setNum(newArray);
    console.log(num);
  }
  return (
    <div>
      {num.map(function (value) {
        return <h1>{value}</h1>;
      })}
      <button onClick={btnclicked}>Click me</button>
    </div>
  );
};

export default Array;
