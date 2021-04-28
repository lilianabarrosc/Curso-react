import React, { Fragment, useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
import ProgressBar from "../../components/Common/ProgressBar";
import Message from "../../components/Common/Message";
import Detail from "../../components/Details/Detail";

//se aplica controlador de errores
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from "../../components/Common/ErrorFallback";

const MovieDetail = () => {
    const { doneFetchMovie, movieDetail } = useContext(MovieContext);
    return (
        <Fragment>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
            {doneFetchMovie ? (
                movieDetail ? (
                    <Detail movie={movieDetail} />
                ) : (
                        <Message text="No encontramos la peli :(" />
                    )
            ) : (
                    <ProgressBar />
                )}
            </ErrorBoundary>
        </Fragment>
    )
}

export default MovieDetail;
