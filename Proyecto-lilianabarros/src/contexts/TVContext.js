import React, { createContext, useState, useEffect } from 'react';
import { tvGet } from '../constants';

export const TVContext = createContext();

const TVContextProvider = ({ children }) => {
    const tv_id = window.location.pathname.split("/")[3];
    const [doneFetchTV, setDoneFetchTv] = useState(false);
    const [tvDetail, setTvDetail] = useState();

    useEffect(() => getTV(tv_id), [tv_id]);

    const getTV = (tv_id) => {
        fetch(tvGet(tv_id))
            .then((res) => res.json())
            .then((data) => {
                setDoneFetchTv(true);
                setTvDetail(data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <TVContext.Provider
            value={{ doneFetchTV, tvDetail }}
        >
            {children}
        </TVContext.Provider>
    );
}

export default TVContextProvider;
