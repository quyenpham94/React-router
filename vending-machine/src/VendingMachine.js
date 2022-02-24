import React from 'react';
import { Link } from "react-router-dom";
import vendingMachineImg from "./VendingMachineImg.png";
import Message from './Message';    
import './VendingMachine.css';

const VendingMachine = () => {
    return (
        <div className="VendingMachine"
             style={{ backgroundImage: `url(${vendingMachineImg})`}}>
            <Message>
                <h1> Hello I am a Vending Machine. What would you like to eat?</h1>
            </Message>
            <Message>
                <h1><Link to="/soda">Soda</Link></h1>
                <h1><Link to="/chips">Chips</Link></h1>
                <h1><Link to="/sardines">Sardines</Link></h1>
            </Message>
        </div>
    )
}

export default VendingMachine;