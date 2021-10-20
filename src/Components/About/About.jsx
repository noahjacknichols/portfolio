import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const startAnimation = 0;
const endAnimation = 600;

const About = (props) => {
  const { offset, mouseRefs } = props;
  const { mouseRef1, mouseRef2, mouseRef3, mouseRef4 } = mouseRefs;
  const translateAmount = Math.min(
    250,
    ((offset - startAnimation) / endAnimation) * 1000
  );
  const title = "Hello, I'm Noah Nichols";
  return (
    <div className={"noselect"}>
      <div className={"mb-5 width-100 mt-5"}>
        <div className={"intro-title"}>Hello, I'm Noah Nichols</div>
      </div>
      <div className="intro-text ">
        <div className={"intro-gradient text-left"} ref={mouseRef1}>
          <div
            className={"gradient-text"}
            style={{
              transform: `translateX(${translateAmount}px)`,
              zIndex: "4",
            }}
          >
            SOFTWARE
          </div>
        </div>
        <div className={"intro-gradient text-right"} ref={mouseRef2}>
          <div
            className={"gradient-text"}
            style={{
              transform: `translateX(-${translateAmount}px)`,
              zIndex: "3",
            }}
          >
            DEVELOPER
          </div>
        </div>
        <div className={"intro-gradient text-left"} ref={mouseRef3}>
          <div
            className={"gradient-text"}
            style={{
              transform: `translateX(${translateAmount}px)`,
              zIndex: "2",
            }}
          >
            & CREATIVE
          </div>
        </div>
        <div className={"intro-gradient text-right"} ref={mouseRef4}>
          <div
            className={"gradient-text"}
            style={{
              transform: `translateX(-${translateAmount}px)`,
              zIndex: "1",
            }}
          >
            INNOVATOR
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
