import React from "react";
import Rightcard from "./Rightcard";

const Rightcontent = (props) => {
  
  
  return (
    <div id="right" className="h-full flex flex-nowrap gap-10 overflow-x-auto rounded-4xl w-2/3 p-5  pb-10">
      
      {props.users.map(function(el, idx){

        return <Rightcard key={idx} id={idx} img = {el.img} tag= {el.tag} intro={el.intro} color={el.color} />
      })}
      
    </div>
  );
};

export default Rightcontent;
