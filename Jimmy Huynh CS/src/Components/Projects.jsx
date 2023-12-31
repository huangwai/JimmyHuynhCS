import React from "react";
import projects from "../assets/ProjectsArr";
import "../Components/Components.css";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
        PROJECTS
      </Typography>
      {projects.map((item, index) => (
        <div key={index}>
          <Card
            className="card"
            sx={{ minWidth: 275, backgroundColor: "inherit", color: "white" }}
          >
            <CardContent>
              <h3>{item.title}</h3>
              <p style={{ color: "#d1d1d1" }}>{item.desc}</p>
              <Button
                className="headerButton"
                sx={{ color: "goldenrod", cursor: "default" }}
              >
                {item.skills}
              </Button>
            </CardContent>
            <CardActions>
              <Button
                sx={{ color: "white", border: 1 }}
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
