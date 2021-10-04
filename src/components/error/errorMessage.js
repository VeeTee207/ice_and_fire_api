import React from 'react';
import './errorMessage.css';
import img from './error.jpg';

const ErrorMessage = () => {
    return (
        <>
            <img class="block" src={img} alt='error'></img>
            {/* <img class="block" src={'/img/error.jpg'} alt='error'></img> */}

            <span>Something goes wrong for now  !!!!</span> 
        </>
    )
    
}
export default ErrorMessage;

