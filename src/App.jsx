import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import './App.css';
import "./Home.css"
import "./About.css"

import Home from "./Components/Sections/Home";
import About from "./Components/Sections/About";
import Projects from "./Components/Sections/Project";
import Contact from "./Components/Sections/Contact";
import Skill from "./Components/Sections/Skill";
// import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,        // Scroll kitni der tak chalega (makkhan feel ke liye 1.2 best hai)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ye smooth easing function hai
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,   // Scroll ki speed kitni hogi
      touchMultiplier: 2,   // Mobile touch smoothness
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy() // Component unmount hone par memory clear karega
    }
  }, [])
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
      {/* <Skill /> */}

    </>
  );
}

export default App;
