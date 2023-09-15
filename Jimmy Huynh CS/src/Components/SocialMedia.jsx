import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../Components/Components.css";
import { Button } from "@mui/material";

const SocialMedia = () => {
  return (
    <div className="socialmedia">
      <Button
        href="https://www.linkedin.com/in/jimmyhuynh-cs/"
        className="socialButtons"
      >
        {" "}
        <LinkedInIcon className="socialButtons" style={{ color: "white" }} />
      </Button>
      <Button href="https://github.com/huangwai" className="socialButtons">
        {" "}
        <GitHubIcon className="socialButtons" style={{ color: "white" }} />
      </Button>
    </div>
  );
};

export default SocialMedia;
