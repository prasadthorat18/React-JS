import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <h2>Thorat CO. LTD.</h2>
        <img
          src="https://seeklogo.com/images/P/peaky-blinders-logo-47E0448C0B-seeklogo.com.png"
          alt=""
        />
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">Aoout</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/product">Product lelo</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
