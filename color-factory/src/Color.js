import React from 'react';
import { Link } from 'react-router-dom';
import './Color.css';

const Color = ({hex, color, history}) => {
    if (!hex) {
        history.push("/colors");
    }

    return (
        <div classname="Color" style={{ backgroundColor: hex }}>
            <p>this is {color}.</p>
            <p>Isn't it beautiful?</p>
            <p>
                <Link to="/">Go back</Link>
            </p>
        </div>
    )
};

export default Color;