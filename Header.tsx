import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
    return (
        <header>
            <div className="container mx-auto flex justify-between items-center p-6">
                <Logo />
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tighter text-white text-right">Guía de Vinilos<br />Fabricación<br />2025®.</h1>
            </div>
        </header>
    );
};

export default Header;