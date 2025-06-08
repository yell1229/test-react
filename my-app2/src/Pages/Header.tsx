import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header>
            <ul>
                <li><Link to="/counter">Counter</Link> </li>
                <li><Link to="/quiz">Quiz</Link></li>
            </ul>
        </header>
    );
}

