import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);
    setUserData(response.data);
  };

  // understand this useeffect babee
  useEffect(function () {
    getdata();
  }, [index]);

  let printUserData = <h3 className="text-gray-500 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading......</h3>;

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div> 
          <Card elem={elem} key={idx}/>
        </div>
      );
    });
  }

  return (
    <div className="h-screen overflow-auto bg-black p-4 text-white ">

      <h2 className=" fixed bg-red-500 text-7xl">{index}</h2>
      <div className="flex flex-wrap gap-6">{printUserData}</div>

      <div className="flex justify-center gap-6 m-7 items-center">
        <button
          style = {{opacity: index == 1 ? 0.5 : 1}}
          onClick={() => {
            if(index > 1){
              setIndex(index-1)
              setUserData([])
            }
          }}
          className="bg-amber-400 text-black rounded px-6 py-3 text-sm cursor-pointer active:scale-95">Prev</button>
        <h4>Page {index}</h4>
        <button
          onClick={() => {
            setIndex(index+1)
            setUserData([])
          }}
          className="bg-amber-400 text-black rounded px-6 py-3 text-sm cursor-pointer active:scale-95">Next</button>
      </div>
    </div>
  );
};

export default App;
