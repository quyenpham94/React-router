import React, { useState } from 'react';
import DiceSet from './DiceSet';
import { rollDice } from './utils';

const RollEm = ({ numDice = 3, numSides = 6, gameState, addWin }) => {
    const [vals, setVals] = useState(Array(numDice).fill());

    const roll = e => {
        setVals(rollDice(numDice, numSides));
        addWin();
    }
    return (
        <div className='RollEm'>
            <DiceSet vals={vals} />
            {gameState ? (
                <b>You {gameState}!</b>
            ) : (
                <button onClick={roll}>Roll</button>
            )}

        </div>
    )
}

export default RollEm;