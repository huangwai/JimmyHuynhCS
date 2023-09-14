import React from "react";
import projects from "../assets/ProjectsArr";
import "../Components/Components.css";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      {/* <h2>Projects</h2> */}
      {projects.map((item, index) => (
        <div key={index}>
          <Card
            sx={{ minWidth: 275, backgroundColor: "inherit", color: "white" }}
          >
            <CardContent>
              <h2>{item.title}</h2>
              <p style={{ color: "grey" }}>{item.desc}</p>
              <Button sx={{ border: 1, color: "goldenrod" }}>
                {item.skills}
              </Button>
            </CardContent>
            <CardActions>
              <Button
                sx={{ color: "white" }}
                className="button"
                href={item.link}
              >
                Learn more
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Projects;
