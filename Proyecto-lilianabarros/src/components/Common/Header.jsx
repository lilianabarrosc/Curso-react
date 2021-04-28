import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import logo from "../../assets/img/films.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <AppBar position="sticky" color="secondary">
      <Toolbar>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <Avatar alt="Remy Sharp" src={logo} />
        </IconButton>
        &nbsp;&nbsp;
        <h1>App de Pel&iacute;culas</h1>
        &nbsp;&nbsp; &nbsp;&nbsp;
        <Button variant="contained" component="span" component={Link} to={`/`}>
          Peliculas
        </Button>
        &nbsp;&nbsp;
        <Button variant="contained" component="span" component={Link} to={`/tv`}>
          Series TV
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);

Header.displayName = "Header";

export default Header;
