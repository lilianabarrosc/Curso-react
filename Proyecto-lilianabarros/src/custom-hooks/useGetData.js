import React from 'react';


const useGetData = (id, setDoneFetch, setDetail, dataGet) => {
    const getData = (id) => {
        fetch(dataGet(id))
            .then((res) => res.json())
            .then((data) => {
                setDoneFetch(true);
                setDetail(data);
            })
            .catch((err) => console.log(err));
    };
    return { getData }
}

export default useGetData;
