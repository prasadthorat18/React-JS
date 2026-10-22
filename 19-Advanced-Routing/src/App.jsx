import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Mommy from "./pages/Mommy";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

import Page404 from './error/Page404'

import Men from './product/Men'
import Women from './product/Women'
import Kids from './product/Kids'
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div >

      <Navbar />
      {/* <Link to='/mommy' >Mommy</Link> */}
      <Navbar2 />
    
      <Footer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mommy" element={<Mommy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />   {/*  Dynamnic route */}

        <Route path="/Product" element={<Product />} >
          {/* Nested Routing */}
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>


        <Route path="*" element={<Page404 /> } />
      </Routes>
    </div>
  );
};

export default App;
