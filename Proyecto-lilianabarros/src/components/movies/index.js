import React, { Fragment, useContext } from 'react';
import { PopularMovieContext } from '../../contexts/PopularMovieContext';
import ProgressBar from "./../Common/ProgressBar";
import Message from "./../Common/Message";
import PopularMovies from "./Movies";


const Movies = () => {
    const { doneFetch, movies } = useContext(PopularMovieContext);
    return (
        <Fragment>
            {doneFetch ? (
                movies.length ? (
                    <PopularMovies movies={movies} />
                ) : (
                        <Message text="No hay resultados :(" />
                    )
            ) : (
                    <ProgressBar />
                )}
        </Fragment>
    )
}

export default Movies;
