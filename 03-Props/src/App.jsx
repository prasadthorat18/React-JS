import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="Parent">
      <Card
        user="Prasad Thorat"
        age={22}
        img="https://images.unsplash.com/photo-1788961155822-a200656ee25d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Bhakti Kulkarni"
        age={21}
        img="https://images.unsplash.com/photo-1788938594249-407d8be94d89?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Pooja Thorat"
        age={24}
        img="https://images.unsplash.com/photo-1788259187567-adfaaae8361c?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Archana Thorat"
        age={26}
        img="https://plus.unsplash.com/premium_photo-1664475450083-5c9eef17a191?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card />
    </div>
  );
};

export default App;
