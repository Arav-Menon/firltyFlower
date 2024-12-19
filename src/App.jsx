import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import CustomCursor from "./CustomCursor";
function App() {
  return (
    <>
     <CustomCursor />
    <Navbar/>
    <Header/>
    </>
  )
}

export default App