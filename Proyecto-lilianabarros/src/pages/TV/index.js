import React, { Fragment, useContext } from 'react';
import { PopularTVContext } from '../../contexts/PopularTVContext';
import ProgressBar from "../../components/Common/ProgressBar";
import Message from "../../components/Common/Message";
import PopularData from "../../components/Collection/Data";


const TV = () => {
    const { doneFetchTVS, tvs } = useContext(PopularTVContext);
    return (
        <Fragment>
            {doneFetchTVS ? (
                tvs.length ? (
                    <PopularData data={tvs} link_detail={"/tv/detail/"}/>
                ) : (
                        <Message text="No hay resultados :(" />
                    )
            ) : (
                    <ProgressBar />
                )}
        </Fragment>
    )
}

export default TV;
