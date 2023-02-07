import React from 'react';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header>
            <NavLink to='welcome'>Головна</NavLink>
            <NavLink to='habits'>Мої звички</NavLink>
        </header>
    );
}

export default Header;