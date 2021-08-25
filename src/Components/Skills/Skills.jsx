import React from "react";
const Skills = (props) => {
  const skills = [
    "Node.JS",
    "Express",
    "React",
    "Redux",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "HTML/CSS",
    "SASS",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "MySQL",
    "Docker",
    "Kubernetes",
    "Git",
    "Jest",
    "Sinon",
    "AWS",
  ];
  return (
    <div className={"skills"}>
      <div className={"statement relative  mb-5 "}>
        <div className={"absolute quote1"}>
          <i>&ldquo;</i>
        </div>
        I'm a Software Developer based out of <b>Waterloo, Ontario</b>. I've
        currently been working as a <b>Lead Back End Developer</b> at a
        Toronto-based social media startup called <b>LeapGrad</b>.
        <div className={"absolute quote2"}>&rdquo;</div>
      </div>
      <div className={"flex list-header mb-4"}>
        Some of the skills and tools I use:{" "}
      </div>
      <div className={"flex row center p-2 skill-list"}>
        <div className={"flex row center p-2"}>
          {skills.map((skill) => {
            return <div className={"skill-point"}>{skill}</div>;
          })}
        </div>
      </div>
    </div>
    //
  );
};

export default Skills;
