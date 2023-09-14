import React from "react";
import Typography from "@mui/material/Typography";

const MiniBio = () => {
  return (
    <div className="about" id="about">
      <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
        ABOUT
      </Typography>
      <p>
        {" "}
        I just graduated from Virginia Tech with a B.S in Computer Science. My
        main area of focus is software development. I enjoy tackling difficult
        problems, picking up new technology, and optimizing applications to best
        fit my clients' needs. <br />
        <br />
        My interest in computer science began when I was drawn to the challenge
        of the field. I've always been fascinated by the problem-solving aspect
        of creating applications, and my coursework in college has introduced me
        to many different technologies that I'm eager to explore further.
        <br />
        <br /> Now, my personal and professional goal is to use my existing
        software development skills and knowledge to create even more immersive
        applications for clients.
      </p>
    </div>
  );
};

export default MiniBio;
