import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  const BF = "Prasad";
  const GF = "Bubuu";
  return (
    <div>
      <Navbar />

      <h1>
        Hello, Guys I am {BF}. {GF}'s Boyfreind{" "}
      </h1>

      <Card />
      <Card />

      {/* <div className="card">
        <h1>Bhakti Kulkarni</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          minus!
        </p>
      </div> */}
    </div>
  );
};

export default App;
