import React from "react";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661777467209-d1fb895cd266?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: " ",
      color: "Blue",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1571365689578-618663443bd7?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: " ",
      color: "lightseagreen",

      tag: "Unserved",
    },

    {
      img: "https://images.unsplash.com/photo-1574100004472-e536d3b6bacc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: " ",
      color: "pink",

      tag: "Underbanked",
    },

    {
      img: "https://plus.unsplash.com/premium_photo-1675713554219-222b21eb19f3?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: " ",
      color: "black",

      tag: "Chut",
    },

    {
      img: "https://plus.unsplash.com/premium_photo-1664372145651-27e27ffabbcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYyfHx8ZW58MHx8fHx8",
      intro: " ",
      color: "red",

      tag: "Undesrved",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
