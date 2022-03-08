import React, { useState } from 'react';
import DeadlyDoubles from './DeadlyDoubles';

const SimpleDeadlyDoublesTable = () => {
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);

    const addWin = () => {
        setWins(wins => wins + 1);
    }

    const addLoss = () => {
        setWins(losses => losses + 1);
    }

    return (
        <div className='SimpleDeadlyDoublesTable'>
            <h2>Deadly Doubles</h2>
            <p>
                <i>Reach the sum before a deadly double takes you down!</i>
            </p>
            <p>
                Wins: {wins} $mdash; Losses: {losses}
            </p>

            <DeadlyDoubles addWin={addWin} addLoss={addLoss} />

        </div>
    )
}

export default SimpleDeadlyDoublesTable;