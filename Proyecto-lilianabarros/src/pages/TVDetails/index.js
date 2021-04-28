import React, { Fragment, useContext } from 'react';
import { TVContext } from '../../contexts/TVContext';
import ProgressBar from "../../components/Common/ProgressBar";
import Message from "../../components/Common/Message";
import Detail from "../../components/Details/Detail";

//se aplica controlador de errores
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from "../../components/Common/ErrorFallback";

const TVDetail = () => {
    const { doneFetchTV, tvDetail } = useContext(TVContext);
    return (
        <Fragment>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
            {doneFetchTV ? (
                tvDetail ? (
                    <Detail movie={tvDetail} />
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

export default TVDetail;
