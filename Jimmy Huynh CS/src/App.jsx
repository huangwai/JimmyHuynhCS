import "./App.css";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import MiniBio from "./Components/MiniBio";
import Projects from "./Components/Projects";
import "@fontsource/roboto/500.css";
import Divider from "@mui/material/Divider";
import SocialMedia from "./Components/SocialMedia";
import Header2 from "./Components/Header2";

function App() {
  return (
    <div id="wrapper">
      {/* <Header /> */}
      <div id="left">
        <div id="left-content">
          <Hero />
          <Header2 />
          <SocialMedia />
        </div>
      </div>

      <div id="right">
        <MiniBio />
        {/* <Divider sx={{ color: "goldenrod" }} /> */}
        <Experience />
        {/* <Divider sx={{ color: "goldenrod" }} /> */}
        <Projects />
        {/* <Divider sx={{ color: "goldenrod" }} /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
