import React, { useState } from 'react';

import "./Table.css";

const Table = (props) => {
    const [gameStates, setGameStates] = useState([]);

    const addWin = () => {
        setGameStates(states => [...states, "won"]);
    }

    const addLoss = () => {
        setGameStates(states => [...states, "lost"]);
    }

    const wins = gameStates.filter(st => st === "won").length;
    const losses = gameStates.length - wins;

    let sets = gameStates.map((gs, idx) => (
        <props.game key={idx} gameState={gs} {...props} />
    ));

    sets.push(
        <props.game 
            key={sets.length}
            addWin={addWin}
            addLoss={addLoss}
            {...props}
        />
    );
    return (
        <div className="Table">
            <h2>{props.title}</h2>
            <p>
                <i>{props.description}</i>
            </p>
            <p>
                Wins: {wins} &mdash; Losses: {losses}
            </p>
            {sets.reverse()}
        </div>
    );
}

export default Table;