import React, { useEffect, useState, useRef } from "react";

import "./SmoothScroll.css";
import useWindowSize from "../../hooks/useWindowSize";

const SmoothScroll = ({ children, setHeightPercent, setOffset }) => {
  // 1.
  const windowSize = useWindowSize();
  windowSize.height += 100; //quick fix until i learn why useWindowSize is always shorter than what DOM really is on first render

  //2.
  const scrollingContainerRef = useRef();

  const [interval, setInterval] = useState(false);
  const waitForInterval = (val) => {
    if (!interval) {
      setInterval(true);
      setOffset(val);
      setTimeout(() => {
        setInterval(false);
      }, 1000);
    }
  };

  // 3.
  const data = {
    ease: 0.12,
    current: 0,
    previous: 0,
    rounded: 0.1,
  };

  // 4.
  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollingContainerRef.current.getBoundingClientRect().height
    }px`;
  };

  // 5.
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    if (Math.round(data.previous) === 0) {
      data.previous = 0;
    }
    data.rounded = Math.round(data.previous * 100) / 100;
    if (setHeightPercent) {
      setHeightPercent(
        Math.round(
          (data.previous /
            (scrollingContainerRef.current.getBoundingClientRect().height -
              window.innerHeight)) *
            100
        )
      );
    }
    if (setOffset) {
      setOffset(Math.round(data.previous / 10));
    }
    scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <div className="parent" style={{ zIndex: "2" }}>
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
