import React, { useState } from "react";

const Object = () => {
  const [student, setStudent] = useState({
    name: "prasad",
    age: 10,
    Bodycnt: 0,
  });

  const btnclicked = () =>{
    let newStudent = {...student}
    console.log(newStudent);

    newStudent.name = "Arbaj";
    newStudent.age = 20;
    newStudent.Bodycnt = 4;

    console.log(newStudent);

    setStudent(newStudent);
    
  }

  return (
    <div>
      <h1>Name = {student.name} <br /> Age = {student.age} <br /> Body count = {student.Bodycnt}</h1>
      <button onClick={btnclicked}>click me</button>
    </div>
  );
};

export default Object;
