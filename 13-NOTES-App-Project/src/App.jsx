import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("task -", title);
    // console.log("Information -", details);

    const newTask = [...task];

    newTask.push({ title, details });

    setTask(newTask);
    console.log(newTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const newTask = [...task];
    
    newTask.splice(idx, 1);

    setTask(newTask); 
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col  lg:w-1/2 gap-5 items-start p-10"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        {/* Pehla wala input - Title */}
        <input
          className="px-5 py-2 w-full font-medium border-2 outline-none rounded"
          type="text"
          placeholder="Enter Your Task"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* Detailed wala input - Deatail  */}
        <textarea
          className="px-5 py-2 h-32 w-full font-medium border-2 outline-none rounded"
          type="text"
          placeholder="Enter Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className=" bg-white text-black active:scale-95 font-medium rounded outline-none px-5 py-2 w-full">
          Add Notes
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>

        <div className="flex flex-wrap items-start justify-start mt-10 h-[90%] overflow-auto gap-10">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className=" flex flex-col justify-between items-start relative h-60 w-45 bg-cover bg-[url('https://png.pngtree.com/png-clipart/20220615/original/pngtree-empty-blank-paper-of-notebook-free-png-and-vector-png-image_8043328.png')] text-black px-12 py-9 rounded-2xl"
              >
                <div>
                  <h3 className="leading-tight text-lg font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-3 leading-tight text-xs font-semibold text-gray-600">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={(idx) => {
                    deleteNote(idx);
                  }}
                  className="w-full cursor-pointer active:scale-95 bg-red-500 rounded px-5 py-1 font-semibold text-white text-xs "
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
