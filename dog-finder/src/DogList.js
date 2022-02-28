import React from 'react';
import { Link } from "react-router-dom";

import './DogList.css';

const DogList = ({dogs}) => {
    return (
        <div className='DogList'>
            <div className='row mt-4'>
                <div className='col'>
                <h1 className='text-center'>
                    HELLO! WE ARE DOGS. CLICK ON US FOR MORE INFORMATION
                </h1>
                <div className='row'>
                    {dogs.map(d => (
                        <div className='col-3 text-center' key={d.name}>
                            <img src={d.src} alt={d.name} />
                            <h3>
                                <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default DogList;