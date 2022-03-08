import React from "react";
import Die from './Die';

import './DiceSet.css';


const DiceSet = ({ vals }) => {
    return (
        <section className="DiceSet">
            {vals.map(v => (
                <Die val={v} />
            ))}
        </section>
    )
}

export default DiceSet;