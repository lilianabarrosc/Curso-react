import React, { createContext, useState, useEffect } from 'react';   
import { popularMovieGet } from '../constants';

export const PopularMovieContext = createContext();

const PopularMovieContextProvider = ({ children }) => {
    const [doneFetch, setDoneFetch] = useState();
    const [movies, setMovies] = useState([]);


    useEffect(() => getPopularMovies(), []);

    const getPopularMovies = () => {
        fetch(popularMovieGet())
        .then(res => res.json())
        .then(data => {
            setDoneFetch(true);
            setMovies(data.results);
        })
        .catch(err => console.log(err));
    }

    return (
       <PopularMovieContext.Provider value={{ doneFetch, movies}}>
           { children }
       </PopularMovieContext.Provider>
    )
}

export default PopularMovieContextProvider;
