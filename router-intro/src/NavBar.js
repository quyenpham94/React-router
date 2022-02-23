
import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/eat">Eat</NavLink>
            <NavLink to="/drink">Drink</NavLink>
        </nav>
    )
}
export default NavBar;