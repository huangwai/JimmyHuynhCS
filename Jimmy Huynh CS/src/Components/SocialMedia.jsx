import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../Components/Components.css";
import { Button } from "@mui/material";

const SocialMedia = () => {
  return (
    <div className="socialmedia">
      <Button className="socialButtons">
        {" "}
        <LinkedInIcon style={{ color: "white" }} />
      </Button>
      <Button className="socialButtons">
        {" "}
        <GitHubIcon style={{ color: "white" }} />
      </Button>
    </div>
  );
};

export default SocialMedia;
