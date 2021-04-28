import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { imageUrl } from "../../constants";
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(20),
    },
    textAlign: "center",
  },
  cover: {
    width: 100,
    margin: 10,
    borderRadius: 25,
    position: "center",
  },
  companyImage: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
}));

const Company = ({ logo, name, country }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <br />
        <strong>
          {name} ({country})
        </strong>
        <br />
        <div class="container">
          { logo ?              
            <img className={classes.cover} src={`${imageUrl}${logo} `} alt="logo" />
            :
            ""
          }
        </div>
      </Paper>
    </div>
  );
};

Company.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
  country: PropTypes.string
}

export default Company;
