import React, { useState } from 'react';
import DiceSet from './DiceSet';
import { hasDoubles } from './utils';
import { hasDouble, rollDice, sum } from './utils';

const DeadlyDoubles = ({ numDice = 3, numSides = 6, addWin, addLoss, gameState }) => {
    const [vals, setVals] = useState(Array(numDice).fill(null));
    const goal = Math.floor(numDice * (numSides / 2));

    const roll = e => {
        let vals = rollDice(numDice, numSides);

        if (sum(vals) >= goal) {
            addWin();
        } else if (hasDoubles(vals)) {
            addLoss();
        }

        setVals(vals);
    }

    return (
        <div className='DeadlyDoubles'>
            <DiceSet vals={vals} />
            <div>
                <i>Need: {goal} </i>
                <i>Sum: {sum(vals)} </i>
                {gameState ? (
                    <b>You {gameState}!</b>
                ) : (
                    <button onClick={roll}>Roll</button>
                )}
            </div>

        </div>
    )
}

export default DeadlyDoubles;