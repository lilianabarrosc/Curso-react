import React, { createContext, useState, useEffect } from 'react';   
import { popularTvGet } from '../constants';

export const PopularTVContext = createContext();

const PopularTVContextProvider = ({ children }) => {
    const [doneFetchTVS, setDoneFetch] = useState();
    const [tvs, setTV] = useState([]);


    useEffect(() => getPopularTV(), []);

    const getPopularTV = () => {
        fetch(popularTvGet())
        .then(res => res.json())
        .then(data => {
            setDoneFetch(true);
            setTV(data.results);
        })
        .catch(err => console.log(err));
    }

    return (
       <PopularTVContext.Provider value={{ doneFetchTVS, tvs}}>
           { children }
       </PopularTVContext.Provider>
    )
}

export default PopularTVContextProvider;
