import React from "react";
import PELIS_DATA from '../../pages/home/home.data.js';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }));
  
const PeliDetails = (props) => {
    var peli = PELIS_DATA.find( function (movie){
        console.log(movie);
        return movie.id == props.match.params.id;
    });
    console.log(peli);
    const classes = useStyles();
    const theme = useTheme();

    return(
        <div className="root">
        <Grid container spacing={3} justify="center">
            <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {peli.original_title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {peli.overview}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                    {peli.release_date}
                </Typography>
                </CardContent>
            </div>
            <div className={classes.cover}>
                    <img className={classes.cover} src={`https://image.tmdb.org/t/p/w500${peli.poster_path} `} alt="title" />
                </div>
            </Card>
        </Grid>
        </div>
    )
};
    

PeliDetails.displayName = 'PeliDetails';

export default PeliDetails;