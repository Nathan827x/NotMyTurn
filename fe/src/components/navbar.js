import React, { Component } from 'react';

import { Link } from "react-router-dom";
import firebase from './../firebase';

function signOut() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });

}

class NavBar extends Component {
    render() {
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
                        {this.props.loggedIn ?
                            <li className="nav-item">
                                <a className="nav-link" href="/" onClick={signOut}>Logout</a>
                            </li> : <li className="nav-item">
                                <Link to="/auth" className="nav-link">Signup/Signin</Link>
                            </li>
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;