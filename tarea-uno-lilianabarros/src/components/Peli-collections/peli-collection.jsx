import React from "react";
import "./peli-collection.css";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const PeliCollection = ({ id, original_title, vote_average, release_date, poster_path, overview }) => {

    const youHandleClickFunc = () => {
    }
        
    return (
    <Card className="root" onClick={()=> youHandleClickFunc()}>
        <CardActionArea>
        <CardContent>
            <Typography class="media">
            <img class="media" src={`https://image.tmdb.org/t/p/w500${poster_path} `} alt="title" />
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
                {original_title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {release_date}
            </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" disabled color="primary">
            {vote_average}
        </Button>
        <Button size="small" color="primary" component={Link} to={`/movie/${id} `}>
            Ver Detalle
        </Button>
        </CardActions>
    </Card>
    );
};

PeliCollection.displayName = 'PeliCollection';

export default PeliCollection;