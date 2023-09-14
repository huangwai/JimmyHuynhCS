import React from "react";
import experience from "../assets/ExperienceArr";
import { Button } from "@mui/material";
import "../Components/Components.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
        EXPERIENCE
      </Typography>
      {experience.map((item, index) => (
        <div key={index}>
          <Card
            sx={{ minWidth: 275, backgroundColor: "inherit", color: "white" }}
          >
            <CardContent>
              <h2>{item.title}</h2>
              <h4>{item.date}</h4>
              <h2>{item.field}</h2>
              <p style={{ color: "grey" }}>{item.desc}</p>
              <Button sx={{ border: 1, color: "goldenrod" }}>
                {item.skills}
              </Button>
            </CardContent>
          </Card>
        </div>
        // <div key={index}>

        //   <h2>{item.title}</h2>
        //   <h2>{item.field}</h2>
        //   <h4>{item.date}</h4>
        //   <p>{item.desc}</p>
        //   <Button>{item.skills}</Button>
        // </div>
      ))}
    </div>
  );
};

export default Experience;
