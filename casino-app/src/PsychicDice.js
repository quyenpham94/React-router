import React, { useState } from 'react';
import DiceSet from './DiceSet';
import { rollDice } from './utils';

const PsychicDice = ({ numDice = 3, numSides = 6, addWin, addLoss, gameState }) => {
    const [vals, setVals] = useState(Array(numDice).fill());
    const [unrolled, setUnrolled] = useState(true);

    const roll = e => {
        setVals(rollDice(numDice, numSides));
        setUnrolled(false);
    }

    return (
        <div className='PsychicDice'>
            <DiceSet vals={vals} />
            <div>
                {gameState ? (
                    <b>You {gameState}!</b>
                ) : unrolled ? (
                    <button onClick={roll}>Roll</button>
                ) : (
                    <span>
                        <button onClick={addWin}>Yep!</button>
                        <button onClick={addLoss}>Nope!</button>
                    </span>
                )}
            </div>
        </div>
    )
}

export default PsychicDice;