import React, {Fragment} from 'react';
import Message from '../../components/Common/Message';
import ButtonPrimary from '../../components/Common/ButtonPrimary';

const NotFound = () => (
    <Fragment>
        <Message text="404: URL Not Found" />
        <ButtonPrimary type="back" to="/" />
    </Fragment>
)

export default NotFound;
