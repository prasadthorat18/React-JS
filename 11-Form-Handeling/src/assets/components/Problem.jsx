import React from "react";

const Problem = () => {
  const submitHandler = (e) => {
    // form is submitting but doesnt showing this in console
    console.log("Form submitted bur not showing ");
  };


  return <div>
    <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter Your name" />
        <button>Submit the Form</button>
      </form>
  </div>;
};

export default Problem;
