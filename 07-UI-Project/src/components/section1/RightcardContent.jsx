import React from "react";
import { MoveRight } from "lucide-react";

const RightcardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center text-xl font-semibold">
        {props.id+1}
      </h2>
      <div>
        <p className="text-lg leading-relaxed text-white font-semibold text-shadow-2xs  mb-10 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ullam
          dolor excepturi quas cupiditate maiores?
        </p>
        <div className="flex justify-between items-center">
          <button style={{background:props.color}} className=" text-white font-medium px-9 py-2 rounded-full ">
            {props.tag}
          </button>
          <button style={{background:props.color}} className="text-white px-3 py-2 rounded-full ">
            <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightcardContent;
