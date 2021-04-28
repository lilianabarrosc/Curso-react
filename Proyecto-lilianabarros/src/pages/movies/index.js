import React, { Fragment, useContext } from 'react';
import { PopularMovieContext } from '../../contexts/PopularMovieContext';
import ProgressBar from "../../components/Common/ProgressBar";
import Message from "../../components/Common/Message";
import PopularData from "../../components/Collection/Data";


const Movies = () => {
    const { doneFetch, movies } = useContext(PopularMovieContext);
    return (
        <Fragment>
            {doneFetch ? (
                movies.length ? (
                    <PopularData data={movies} link_detail={"/movie/detail/"}/>
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
