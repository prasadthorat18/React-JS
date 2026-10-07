import React from "react";

// in terminal at applications section there is local storage and session storage
const App = () => {
  // setitem() -> for set values in (key, val) pair at local storage
  localStorage.setItem("User", "Fuck bunnies");
  localStorage.setItem("User1", "Prasad");
  localStorage.setItem("User2", "Bauna Singh");

  localStorage.setItem("age", 23);

  // getitem() -> we use for getting a value of key
  const age = localStorage.getItem("age");
  const user = localStorage.getItem("User");

  console.log(user, age);

  // removeItem() -> remove whatever key-val pair we have to delete

  localStorage.removeItem("User");
  localStorage.removeItem("age");

  // clear() -> to clear all the local storage all items got deleted at a once

  localStorage.clear();

  // HOW TO STORE OBJECT AND ARRAYS AT LOCALSTORAGE

  const student = {
    username: "Prasad",
    age: 21,
    city: "Pune",
    Rank: "Always First",
  };

  localStorage.setItem("Data2", student); // passed as a object data we cannot see it.

  localStorage.setItem("Data", JSON.stringify(student)); // JSON.stringify() converts OBJECT into String

  const data = localStorage.getItem("Data");
  console.log(data); // passes as string for retrive as a object we need to parse it

  const data3 = JSON.parse(localStorage.getItem('Data') );
  console.log(data3);
  console.log(data3.city);
  console.log(data3.Rank);


  return <div>App</div>;
};

export default App;
