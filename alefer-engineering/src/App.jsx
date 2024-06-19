import { useState, useEffect } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import About from "./pages/About";
import Services from "./pages/Services";
import Civil from "./pages/Civil";
import Contact from "./pages/Contact";

export default function App(){

  return(
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Civil/>
      <Contact/>
    </>
  )
}