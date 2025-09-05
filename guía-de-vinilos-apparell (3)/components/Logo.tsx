import React from 'react';

const Logo: React.FC = () => {
    return (
        <div className="h-24 sm:h-32" aria-label="Apparell Logo">
            <img 
                src="https://github.com/bigotesucio/catalogo/blob/main/ApparellTM_LOGOS_WEBblanco.png?raw=true" 
                alt="Apparell Logo" 
                className="w-full h-full object-contain"
            />
        </div>
    );
};

export default Logo;