import React from 'react';

export const Header = () => {
    const title = `HOLA, SOY JORGE VELASQUEZ, DESAROLLADOR WEB`;
    return (
        <header className='title-content'>
            <h1 className="title">
                {title.split('').map((chart, index) => (
                    <span className="blast" key={index}>{chart}</span>
                ))}
            </h1>
        </header>
    );
};
