import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import Navbar from "./components/Navbar";
import "./styles/App.css";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Scroll from "./components/ScRoll";

const TEXTS = ["Bienvenue", "Welcome", "ようこそ", "مَرْحَباً"];


const App = () => {
  const [index, setIndex] = useState(0);
  console.log('re render')

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div >
      <Navbar />
      <div className="">
        <div className="flex flex-nowrap items-center justify-center w-screen h-screen backdrop-invert z-[2]">
          <h1 className="md:text-7xl text-5xl absolute text-[#ffd3d3] font-black uppercase ">
            <TextTransition springConfig={presets.wobbly}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </h1>
        </div>
      </div>
      <Parallax onScroll={(e) => console.log(e)} pages={2} style={{ top: '0', left: '0' }} horizontal   >
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#ff6d6d' }} />

        <ParallaxLayer
          offset={1}
          speed={2}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <Scroll />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default App;
