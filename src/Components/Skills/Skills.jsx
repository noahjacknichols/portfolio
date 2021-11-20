import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";
const Skills = (props) => {
  const skills = [
    "Node.JS",
    "Express",
    "React",
    "Redux",
    "MongoDB",
    "Golang",
    "Kafka",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "React-Query",
    "HTML/CSS",
    "SASS",
    "PostgreSQL",
    "Redis",
    "MySQL",
    "Docker",
    "Kubernetes",
    "Git",
    "Jest",
  ];

  const skillsRef = useRef();
  const skillsVisible = useOnScreen(skillsRef);
  const [skillsWasVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    if (skillsVisible === true) {
      setSkillsVisible(true);
    }
  }, [skillsVisible]);

  // console.log({ sVisible });

  const statementRef = useRef();
  const statementVisible = useOnScreen(statementRef);
  const [statementWasVisible, setStatementVisible] = useState(false);

  useEffect(() => {
    if (statementVisible === true) {
      setStatementVisible(true);
    }
  }, [statementVisible]);
  return (
    <div className={"skills"}>
      <div className={"statement relative"}>
        <div className={`absolute quote1 ${statementWasVisible ? "seen" : ""}`}>
          <i>&ldquo;</i>
        </div>
        I'm a Software Developer based out of{" "}
        <b className={statementWasVisible ? "seen" : ""}>Waterloo, Ontario</b>.
        I'm currently building{" "}
        <b className={statementWasVisible ? "seen" : ""}>cool things </b>
        at <b className={statementWasVisible ? "seen" : ""}>Unity </b>
        as a{" "}
        <b className={statementWasVisible ? "seen" : ""}>Software Developer</b>.
        I've also worked as a{" "}
        <b className={statementWasVisible ? "seen" : ""}>
          Lead Back End Developer
        </b>{" "}
        at a Toronto-based social media startup called{" "}
        <b className={statementWasVisible ? "seen" : ""}>LeapGrad</b>.
        <div
          className={`absolute quote2 ${statementWasVisible ? "seen" : ""}`}
          ref={statementRef}
        >
          &rdquo;
        </div>
      </div>
      <div className={"flex list-header mb-2"}>
        Some of the skills and tools I use:{" "}
      </div>
      <div className={"flex row center p-2 skill-list noselect"}>
        <div className={" row center p-2"}>
          {skills.map((skill, index) => {
            return (
              <div
                className={`skill-point ${skillsWasVisible ? "seen" : ""}`}
                style={{ animationDelay: `${0.175 * index}s` }}
              >
                {skill}
              </div>
            );
          })}
        </div>
        <div ref={skillsRef}></div>
      </div>
    </div>
    //
  );
};

export default Skills;
