import React, { createContext, useState, useEffect } from 'react';
import { movieGet } from '../constants';
import useGetData from '../custom-hooks/useGetData';

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
    const movie_id = window.location.pathname.split("/")[3];
    const [doneFetchMovie, setDoneFetchMovie] = useState(false);
    const [movieDetail, setMovieDetail] = useState();

    useEffect(() => getData(movie_id), [movie_id]);

    const { getData } = useGetData(movie_id, setDoneFetchMovie, setMovieDetail, movieGet);

    return (
        <MovieContext.Provider
            value={{ doneFetchMovie, movieDetail }}
        >
            {children}
        </MovieContext.Provider>
    );
}

export default MovieContextProvider;
