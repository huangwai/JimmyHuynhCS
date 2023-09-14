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

const drawerWidth = window.innerWidth;
// console.log(`Current screen width: ${drawerWidth}px`);
const navItems = [
  { id: "01", name: "about" },
  { id: "02", name: "experience" },
  { id: "03", name: "projects" },
  { id: "04", name: "contact" },
];
// const navItems2 = ["About", "Experience", "Projects", "Contact"];
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // const drawer = (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       Jimmy Huynh
  //     </Typography>
  //     <Divider />
  //     <List>
  //       {navItems.map((item) => (
  //         <ListItem key={item.name} disablePadding>
  //           <ListItemButton
  //             className="button"
  //             href={`#${item.name}`}
  //             sx={{ textAlign: "center" }}
  //           >
  //             <ListItemText primary={item.name} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );
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

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          component="nav"
          sx={{ color: "inherit", backgroundColor: "inherit" }}
        >
          <Toolbar>
            {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            > */}
            {/* <MenuIcon /> */}
            {/* </IconButton> */}
            <Typography
              href={"/"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Jimmy Huynh
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/* <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav> */}
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
