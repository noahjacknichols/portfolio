import React, { useRef, memo } from "react";
import { useEffect, useState } from "react";
import "./App.scss";
import Intro from "./Components/Intro";
import HandleRender from "./Components/HandleRender";
import SmoothScroll from "./Components/SmoothScroll/SmoothScroll";
import Navbar from "./Components/old/Navbar";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
function App() {
  const [_, setHeightPercent] = useState(0);
  const [offset, setOffset] = useState(0);

  const mouseRef1 = useRef();
  const mouseRef2 = useRef();
  const mouseRef3 = useRef();
  const mouseRef4 = useRef();

  const updateOffset = (val) => {
    if (offset !== val) {
      setOffset(val);
    }
  };

  const getCoords = (event) => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    let translateWidth = Math.min(
      50,
      Math.round(((event.pageX - width / 2) / width) * 100)
    );
    let translateHeight = Math.min(
      36,
      Math.round(((event.pageY - height / 2) / height) * 100)
    );
    if (
      mouseRef1?.current &&
      mouseRef2?.current &&
      mouseRef3?.current &&
      mouseRef4?.current
    ) {
      if (window.innerWidth < 800) {
        translateWidth = 0;
        translateHeight = 0;
      }

      mouseRef1.current.style.transform = `translate3d(${
        translateWidth / 1.5
      }px, ${translateHeight / 2}px, 0)`;
      mouseRef2.current.style.transform = `translate3d(${
        translateWidth / 2
      }px, ${translateHeight / 2.5}px, 0)`;
      mouseRef3.current.style.transform = `translate3d(${
        translateWidth / 3
      }px, ${translateHeight / 3.5}px, 0)`;
      mouseRef4.current.style.transform = `translate3d(${
        translateWidth / 4
      }px, ${translateHeight / 4.5}px, 0)`;
    }
  };
  return (
    <div className={"noise"} style={{ zIndex: "1" }} onMouseMove={getCoords}>
      <SmoothScroll
        setHeightPercent={setHeightPercent}
        setOffset={updateOffset}
      >
        <About
          offset={offset}
          mouseRefs={{ mouseRef1, mouseRef2, mouseRef3, mouseRef4 }}
        />
        <Skills />
        <Contact />
      </SmoothScroll>
    </div>
  );
  // }
}

export default memo(App);
