import React from 'react';

export const SlideBar = () => {
    return (
        <aside className="sidebar">
            <ul className="sidebar__options navbar-nav">
                <li className="sidebar__option nav-item">
                    <a
                        className="sidebar__link"
                        aria-current="page"
                        href="#"
                    >
                        Home
                    </a>
                </li>
                <li className="sidebar__option nav-item">
                    <a className="sidebar__link" href="#">
                        Features
                    </a>
                </li>
                <li className="sidebar__option nav-item">
                    <a className="sidebar__link" href="#">
                        Pricing
                    </a>
                </li>
                <li className="sidebar__option nav-item">
                    <a className="sidebar__link">Disabled</a>
                </li>
            </ul>
        </aside>
    );
};
