import React, { useEffect, useRef } from "react";

import "./SmoothScroll.css";
import useWindowSize from "../../hooks/useWindowSize";

const SmoothScroll = ({ children, setHeightPercent, setOffset }) => {
  // 1.
  const windowSize = useWindowSize();

  //2.
  const scrollingContainerRef = useRef();

  // 3.
  const data = {
    ease: 0.05,
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
      setOffset(Math.round(data.previous));
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