import React from 'react';

export const Header = () => {
    
    const title = ['HOLA, ', 'SOY', 'JORGE VELASQUEZ', 'DESAROLLADOR WEB'];
    const saludo = 'HOLA, ';

    return (
        <header className="title-content">
            <h1 className="title">
                {title.map((charts) => (
                    <>
                        {charts.split("").map((chart, index) => (
                            <span className="blast" key={index}>
                                {chart}
                            </span>
                        ))}
                        <br />
                    </>
                ))}
            </h1>
        </header>
    );
};
