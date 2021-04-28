import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import films from './../../assets/img/films.png';
import back from './../../assets/img/back.png';

const ButtonPrimary = ({ type, to }) => (
    <Link className="buttonPrimary" to={to}>
        <Button variant="contained" color="primary">
            <img alt={ type === 'films' ? 'films' : 'back'} src={ type === 'films' ? films : back } />
            { type === 'films' ? 'films' : 'Go Back'}
        </Button>
    </Link>
);

export default ButtonPrimary;