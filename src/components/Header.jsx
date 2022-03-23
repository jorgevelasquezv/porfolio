import React, { Fragment } from 'react';

export const Header = () => {
    
    const title = ['HOLA, ', 'SOY', 'JORGE VELASQUEZ', 'DESAROLLADOR WEB'];

    return (
        <header className="header">
            <h1 className="header__title">
                {title.map((charts, i) => (
                    <Fragment key={i}>
                        {charts.split("").map((chart, index) => (
                            <span className="header__blast" key={index}>
                                {chart}
                            </span>
                        ))}
                        <br />
                    </Fragment>
                ))}
            </h1>
        </header>
    );
};
