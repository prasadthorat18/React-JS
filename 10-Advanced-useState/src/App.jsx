import React, { useState } from "react";
import Object from "./components/Object";
import Array from "./components/Array";
import BatchUpdate from "./components/BatchUpdate";

const App = () => {
  const [num, setNum] = useState(10);

  const btncliked = () => {
    console.log(num); // print 10 --> obvious bcoz we declare num = 10
    setNum(20);
    console.log(num); // print 10 --> bcoz js run asyncronously --> events happens at random so it upadtes value but doesnt show in console
  };
  return (
    <div>
      <h1>value of num is {num} </h1>
      <button onClick={btncliked}>click me</button>

      <hr style={{ marginBottom: 20, marginTop: 20 }} />

      <Object />

      <hr style={{ marginBottom: 20, marginTop: 20 }} />

      <Array />

      <hr style={{ marginBottom: 20, marginTop: 20 }} />

      <BatchUpdate />
    </div>
  );
};

export default App;
