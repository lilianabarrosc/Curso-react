import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 235,
    minWidth: 230,
    margin: 12,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 171,
    textAlign: "center",
  },
}));

const PeliCollection = ({
  movie_id,
  movie_title,
  movie_vote_average,
  movie_release_date,
  movie_poster_path,
}) => {
  const classes = useStyles();
  const youHandleClickFunc = () => {};

  return (
    <Card className={classes.root} onClick={() => youHandleClickFunc()}>
      <CardActionArea>
        <CardContent>
          <Typography>
            <div className={classes.cover}>
              <img
                className={classes.cover}
                src={`https://image.tmdb.org/t/p/w500${movie_poster_path} `}
                alt="title"
              />
            </div>
          </Typography>
          <Typography gutterBottom variant="h6" component="span">
            {movie_title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie_release_date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box position="relative" display="inline-flex">
          <CircularProgress className={movie_vote_average > 7 ? 'MuiCircularProgress-colorPrimary' : 'MuiCircularProgress-colorSecondary'} variant="static" value={movie_vote_average * 10} />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="caption"
              component="div"
              color="textSecondary"
            >{`${movie_vote_average * 10}%`}</Typography>
          </Box>
        </Box>

        <Button
          size="small"
          color="primary"
          component={Link}
          to={`/movie/${movie_id} `}
        >
          Ver Detalle
        </Button>
      </CardActions>
    </Card>
  );
};

PeliCollection.displayName = "PeliCollection";

export default PeliCollection;
