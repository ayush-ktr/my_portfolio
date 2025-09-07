import React from "react";
import "./skill.css"; // Optional: Add styles for the boxes

const Skill = () => {
  const skills = ["JavaScript", "React", "Node.js", "CSS", "HTML"];

  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-box">
          {skill}
        </div>
      ))}
    </div>
  );
};

export default Skill;
