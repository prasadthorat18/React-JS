import React from "react";
import Problem from "./assets/components/Problem";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault(); // problem tackel using by prevent behaviour of natural rerendering
    console.log("Form submitted finally broh");
  };

  return (
    <div>
      <Problem />

      <form
        action=".php"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type="text" placeholder="Enter Your name" />
        <button>Submit the Form</button>
      </form>
    </div>
  );
};

export default App;
