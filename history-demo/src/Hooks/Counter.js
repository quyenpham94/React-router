import React from "react";
import useCounter from './useCounter';

const Counter = () => {
    const [count, increment, decrement] = useCounter();
    return (
        <div>
            <h3>Count is: {count} </h3>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>

        </div>
    )
}

export default Counter;