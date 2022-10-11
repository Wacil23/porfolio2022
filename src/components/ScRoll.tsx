import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Bienvenue", "Welcome", "ようこそ", "مَرْحَباً"];

const Scroll = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <h1 className="md:text-7xl text-5xl absolute text-[#ffd3d3] font-black uppercase ">
        BONJOUR
      </h1>
    </div>
  );
};

export default Scroll;
