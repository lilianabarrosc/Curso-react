import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { imageUrl } from "../../constants";
import Chip from '@material-ui/core/Chip';
import Company from './Company';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  details: {
    display: "flex",
    flexDirection: "column",
    color: "white",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 331,
    margin: 10,
    borderRadius: 25,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const Details = ({ movie }) => {
  console.log(movie);
  console.log(imageUrl);
  const classes = useStyles();

  return (
    <div className="root">
      <Grid container spacing={3} justify="center">
        <Card className={classes.root} style={{ 'background-image': `url(${imageUrl}${movie.backdrop_path})`}}>
          <div className={classes.cover}>
            <img
              className={classes.cover}
              src={`${imageUrl}${movie.poster_path} `}
              alt="title"
            />
          </div>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h2" variant="h2">
                { movie.title } ({ movie.release_date.split("-")[0] })
              </Typography>
              <Typography variant="subtitle1" color="inherit">
                { movie.release_date }
                &nbsp;&nbsp;
                ({movie.original_language})
                &nbsp;&#8226;&nbsp;
                { movie.genres.map(({ name }) => {
                  return <Chip style={{'margin':'3px'}} label={name} />;
                })
                }
                &#8226;&nbsp;
                {Math.trunc(movie.runtime/60)}h {movie.runtime%60}m.
              </Typography>
              <br/>
              <Typography variant="h6" color="inherit">
                 {movie.tagline}
              </Typography>
              <br/>
              <Typography variant="h6">
                Resumen
              </Typography>
              <Typography variant="subtitle1" display="block" color="inherit">
                {movie.overview}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Grid>
      <Grid container spacing={3} justify="center">
          {
            movie.production_companies.map(({ id, logo_path, name, origin_country }) => {
              return <Company style={{'margin':'3px'}}
                        key={id}
                        logo={logo_path}
                        name={name} 
                        country={origin_country}
                     />;
            })
          }
      </Grid>
    </div>
  );
};

Details.displayName = "Details";

export default Details;
