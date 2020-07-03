import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">NotMyTurn</Link>
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Todos</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Create Todo</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Signup/Signin</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}