import React from "react";
import experience from "../assets/ExperienceArr";
import { Button } from "@mui/material";
import "../Components/Components.css";
const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h1>EXPERIENCE</h1>
      {experience.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <h2>{item.field}</h2>
          <h4>{item.date}</h4>
          <p>{item.desc}</p>
          <Button>{item.skills}</Button>
        </div>
      ))}
    </div>
  );
};

export default Experience;
