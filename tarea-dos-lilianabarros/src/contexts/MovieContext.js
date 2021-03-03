import React, { createContext, useState, useEffect } from 'react';
import { movieGet } from '../constants';

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
    const movie_id = window.location.pathname.split("/")[2];
    const [doneFetchMovie, setDoneFetchMovie] = useState(false);
    const [movieDetail, setMovieDetail] = useState();

    useEffect(() => getMovie(movie_id), [movie_id]);

    const getMovie = (movie_id) => {
        fetch(movieGet(movie_id))
            .then((res) => res.json())
            .then((data) => {
                setDoneFetchMovie(true);
                setMovieDetail(data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <MovieContext.Provider
            value={{ doneFetchMovie, movieDetail }}
        >
            {children}
        </MovieContext.Provider>
    );
}

export default MovieContextProvider;
