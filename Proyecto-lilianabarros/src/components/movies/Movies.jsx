import React, { Fragment } from "react";
import PeliCollection from './Peli-collection';
import Grid from '@material-ui/core/Grid';

const PopularMovies = ({ movies }) => (
    <Fragment>
    <div className="root">
      <Grid container spacing={3} justify="center">
        {movies.map(({ id,
                title,
                vote_average,
                release_date,
                poster_path }) => {
            
          return (
            <PeliCollection 
                key={id} 
                movie_id={id}
                movie_title={title}
                movie_vote_average={vote_average}
                movie_release_date={release_date}
                movie_poster_path={poster_path} />
          );
        })}
      </Grid>
    </div>
  </Fragment>
);
   
PopularMovies.displayName = 'PopularMovies';

export default PopularMovies;