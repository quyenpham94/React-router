const rollDice = (numDice, numSides) => {
    return Array.from({ length: numDice }, () => 
        Math.floor(Math.random() * numSides));

}

const sum = (vals) => {
    return vals.reduce((total, val) => total + val || 0, 0);
}

const hasDoubles = (vals) => {
    return vals.length > new Set(vals).size;
}

export { rollDice, sum, hasDoubles };