import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../Components/Components.css";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import "../Components/Components.css";

const Header2 = () => {
  const navItems = [
    { id: "01", name: "about" },
    { id: "02", name: "experience" },
    { id: "03", name: "projects" },
    { id: "04", name: "contact" },
  ];
  const handleDownload = () => {
    const pdfPath = "../../HuynhJimmy_Resume.pdf";

    // Create a link element
    const link = document.createElement("a");
    link.href = pdfPath;
    link.target = "_blank"; // Opens the PDF in a new tab/window
    link.download = "Jimmy Huynh Resume.pdf"; // Specify the file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="header2" style={{ display: "block" }}>
      {/* <Box sx={{ display: { xs: "none", sm: "block" } }}>
        {navItems.map((item) => (
          <Button
            href={`#${item.name}`}
            className="button"
            key={item.name}
            sx={{ color: "#fff" }}
          >
            {item.id} {item.name}
          </Button>
        ))}
        <Button
          className="button"
          sx={{ color: "#fff", border: 1 }}
          onClick={handleDownload}
        >
          Resume
        </Button>
      </Box> */}
      <ul>
        {navItems.map((item) => (
          <li
            className="headerList"
            key={item.name}
            style={{ listStyleType: "none" }}
          >
            <a
              href={`#${item.name}`}
              className="button"
              style={{ color: "#fff" }}
            >
              {" "}
              {item.name}
            </a>
          </li>
        ))}
        <li
          onClick={handleDownload}
          className="headerList"
          key="resume"
          style={{ listStyleType: "none" }}
        >
          <a href={"resume"} className="button" style={{ color: "#fff" }}>
            resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header2;
