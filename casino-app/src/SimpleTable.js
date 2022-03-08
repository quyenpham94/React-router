import React,  { useState } from 'react';

const SimpleTable = ({title, description, game: Game }) => {
    const [wins, setWins] = useState(0);
    const[losses, setLosses] = useState(0);

    const addWin = () => {
        setWins(wins => wins + 1);
    }

    const addLoss = () => {
        setLosses(losses => losses + 1);
    }

    return (
        <div className='Table'>
            <h2>{title}</h2>
            <p>
                <i>{description}</i>

            </p>
            <p>
                Wins: {wins} &mdash; Losses: {losses}
            </p>
            <Game addWin={addWin} addLoss={addLoss} />
        </div>
    )
}

export default SimpleTable;