import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import logo from "../../assets/img/films.png";

const Header = () => (
    <AppBar position="sticky" color='secondary'>
    <Toolbar>
      <IconButton color="primary" aria-label="upload picture" component="span">
          <Avatar alt="Remy Sharp" src={logo} />
      </IconButton>
      &nbsp;&nbsp;
      <h1>App de Pel&iacute;culas</h1>
    </Toolbar>
  </AppBar>
);

Header.displayName = "Header";

export default Header;