/* 

Developed by Shivam Arora

on 28 Oct,2025
*/

//lib
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
//component

//context

//css
import "./navbar.css";

const Navbar = () => {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar>
        {/* Left: Brand */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Typography className="navbar-Heading" variant="h5" sx={{ mr: 1 }}>
            Sales Wizard
          </Typography>
          <Typography
            className="navbar-Heading"
            variant="h5"
            sx={{ color: "#FF4D00" }}
          >
            Sahil Kapoor
          </Typography>
        </Box>

        {/* Right: Navigation buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button href="#carSales" className="navbarButton" color="inherit">
            Car Sales
          </Button>
          <Button href="#insurance" className="navbarButton" color="inherit">
            Insurance
          </Button>
          <Button href="#contact" className="navbarButton" color="inherit">
            Contact Sahil
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
