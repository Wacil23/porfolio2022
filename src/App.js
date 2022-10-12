import React, { useRef, useState, useLayoutEffect, useCallback, useEffect } from "react"
import TextTransition, { presets } from "react-text-transition";
import Navbar from "./components/Navbar";
import "./styles/App.css";
import ResizeObserver from "resize-observer-polyfill"
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion"
import Scroll from "./components/ScRoll";
const TEXTS = ["Bienvenue", "Welcome", "ようこそ", "مَرْحَباً"];


const App = () => {
  const [index, setIndex] = useState(0);

  const scrollRef = useRef(null)
  const ghostRef = useRef(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth)
  }, [scrollRef])

  const onResize = useCallback(entries => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.height)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => onResize(entries))
    resizeObserver.observe(ghostRef.current)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const { scrollYProgress } = useScroll()
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [1, -scrollRange + viewportW]
  )
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)
  console.log(spring)


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
      <div className="flex">
        <div>
          <div className="flex flex-nowrap items-center justify-center w-screen h-screen backdrop-invert z-[2]">
            <h1 className="md:text-7xl text-5xl absolute text-[#ffd3d3] font-black uppercase ">
              <TextTransition springConfig={presets.wobbly}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </h1>
          </div>
        </div>
        <motion.div ref={scrollRef} style={{ x: spring, top: 0, left: 0 }}>
          <div className='flex justify-center items-center w-screen h-screen'>
            <Scroll />
          </div>
        </motion.div>
      </div>
      <div ref={ghostRef} className="ghost" />
      <div>
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default App;
