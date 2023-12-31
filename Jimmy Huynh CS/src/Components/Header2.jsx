import * as React from "react";

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
          <a className="button" style={{ color: "#fff", cursor: "pointer" }}>
            resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header2;
