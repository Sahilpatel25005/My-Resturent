import React, { useState } from "react";
import Logo from "../../../image/logo.svg";
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";

import { Link , NavLink } from "react-router-dom";
import "../../styles/HeaderStyle.css";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [MobileOpen, setMobileOpen] = useState(false);

  const halndelDrawerToggele = () => {
    setMobileOpen(!MobileOpen);
  };

  const drawer = (
    <Box onClick={halndelDrawerToggele} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h5"
        component="div"
        sx={{ flexGrow: 1, mt: 2, mb: 2 }}
      >
        <img src={Logo} alt="" height={"70px"} width={"200px"} />
      </Typography>

      <Divider />

      <ul className="mobile-navigation">
        <li>
          <NavLink activeclassname ="active" to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/About"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/Manu"}>Manu</NavLink>
        </li>
        <li>
          <NavLink to={"/Contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={halndelDrawerToggele}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img src={Logo} alt="" height={"70px"} width={"250px"} />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeclassname = "active" to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/About"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/Manu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/Contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box>
          <Drawer
            variant="temporary"
            open={MobileOpen}
            onClose={halndelDrawerToggele}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
