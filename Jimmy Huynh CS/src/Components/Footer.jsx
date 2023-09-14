import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../Components/Components.css";
const Footer = () => {
  const socials = [GitHubIcon, LinkedInIcon];
  return (
    <div className="footer" id="footer">
      <p>Made by Jimmy Huynh</p>
      <p>Using React.js & Material UI.</p>
      <p>Deployed on Vercel Services</p>
    </div>
  );
};

export default Footer;
