import React, { Fragment, useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
import ProgressBar from "./../Common/ProgressBar";
import Message from "./../Common/Message";
import Detail from "./Detail";


const MovieDetail = () => {
    const { doneFetchMovie, movieDetail } = useContext(MovieContext);
    return (
        <Fragment>
            {doneFetchMovie ? (
                movieDetail ? (
                    <Detail movie={movieDetail} />
                ) : (
                        <Message text="No encontramos la peli :(" />
                    )
            ) : (
                    <ProgressBar />
                )}
        </Fragment>
    )
}

export default MovieDetail;
