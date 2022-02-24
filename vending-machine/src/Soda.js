import React from 'react';
import { Link } from 'react-router-dom';
import sodaImg from './Soda.png';
import Message from './Message';
import './Soda.css';

const Soda = () => {
    return (
        <div className='Soda'>
            <img src={sodaImg} alt="coca cola can" />
            <Message>
                <h1>OMG SUGARRRRR</h1>
                <h1><Link to="/">Go Back</Link></h1>
            </Message>
            <img src={sodaImg} alt="coca cola can" />

        </div>
    )
}

export default Soda;