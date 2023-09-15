import React from "react";
import experience from "../assets/ExperienceArr";
import { Button, CardActionArea } from "@mui/material";
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
            className="card"
            sx={{ minWidth: 275, backgroundColor: "inherit", color: "white" }}
          >
            {/* <CardActionArea> */}
            <CardContent>
              <h3>{item.company}</h3>
              <h3>{item.title}</h3>
              <h4>{item.date}</h4>
              <h3>{item.field}</h3>
              <p style={{ color: "#d1d1d1" }}>{item.desc}</p>
              <Button
                className="headerButton"
                sx={{ color: "goldenrod", cursor: "default" }}
              >
                {item.skills}
              </Button>
            </CardContent>
            {/* </CardActionArea> */}
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Experience;
