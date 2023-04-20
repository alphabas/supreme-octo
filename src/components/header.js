import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import logo from "../logo.svg";

const HeaderComponent = ({ show, setShow, handleShows, handleHide }) => {
  const menuId = "primary-search-account-menu";

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#467599" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#467599", borderBottom: "1px solid white" }}
      >
        <Toolbar>
          <img
            src={logo}
            style={{ width: 70, height: 60, marginRight: 45 }}
            className="App-logo"
            alt="logo"
          />
          {show ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={handleHide}
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <ArrowCircleLeftIcon />
            </IconButton>
          ) : (
            ""
          )}

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Giftr
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {!show ? (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                onClick={handleShows}
                aria-haspopup="true"
                color="inherit"
              >
                <AddCircleIcon />
              </IconButton>
            ) : (
              ""
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderComponent;
