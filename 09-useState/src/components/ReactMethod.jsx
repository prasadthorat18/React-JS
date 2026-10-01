import React, { useState } from "react";

const ReactMethod = () => {
  const [num, setNum] = useState(10);
  const [username, setUsername] = useState("Sarthak");

  function changes() {
    setNum(20);
    setUsername("Bhakti");
  }
  return (
    <div>
      <h1>
        Value of num is {num} <br /> Name of user is {username}
      </h1>
      <button onClick={changes}>click me for update</button>
    </div>
  );
};

export default ReactMethod;
