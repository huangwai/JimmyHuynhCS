import React from "react";
import projects from "../assets/ProjectsArr";
import "../Components/Components.css";
import { Button } from "@mui/material";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      {projects.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <h4>{item.link}</h4>
          <p>{item.desc}</p>
          <Button>{item.skills}</Button>
        </div>
      ))}
    </div>
  );
};

export default Projects;
