import React, { useState } from "react";

const BatchUpdate = () => {
  const [num, setNum] = useState(10);

  //   function btnclicked() {
  //     setNum(num + 1);
  //     setNum(num + 1);
  //     setNum(num + 1);
  //   }                          --> this causes problem bcoz value updtaes only once while we needed it should update thrice

  function btnclicked() {
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    // --> this problem solved using prev logic
  }
  return (
    <div>
      <h1>{num} </h1>
      <button onClick={btnclicked}>click mee</button>
    </div>
  );
};

export default BatchUpdate;
