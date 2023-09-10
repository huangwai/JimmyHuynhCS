import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  const socials = [GitHubIcon, LinkedInIcon];
  return (
    <div>
      footer
      {/* {socials.map((item) => (
        <p>{item}</p>
      ))} */}
    </div>
  );
};

export default Footer;
