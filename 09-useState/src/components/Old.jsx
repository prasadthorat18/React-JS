import React from "react";

const Old = () => {
  let a = 20;

  const changeA = () => {
    console.log('before', a);
    a = 30;
    console.log('after', a);
  };
  return (
    <div>
      <h1>Value of A is {a}</h1>
      <button onClick={changeA}>Click me to chnage</button>  {/* value updates in console but doesnt appear in browser */}
    </div>
  );
};

export default Old;
