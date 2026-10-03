import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted finally broh by", title);
    setTitle("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter Your name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Submit the Form</button>
      </form>
    </div>
  );
};

export default App;
