// src/components/Header.js
import React from 'react';

const Header = () => {
    return (
        <header className="app-header">
            <h1>Webtoon Wonderland</h1>
            <nav>
                <ul>
                    <li><a href="#top-webtoons">Top Webtoons</a></li>
                    <li><a href="#voting">Vote</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

