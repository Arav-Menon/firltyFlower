import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
    <Navbar/>
    </>
  )
}

export default App