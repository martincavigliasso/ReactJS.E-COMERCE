import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav>
            <h1>Perpetua</h1>
            <ul>
                <li>Conjuntos</li>
                <li>Medias</li>
                <li>tops</li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar;