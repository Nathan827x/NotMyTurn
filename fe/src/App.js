import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from './firebase';

import TodoList from './components/todos-list.component.js';
import EditTodo from './components/edit-todo.component';
import CreateTodo from './components/create-todo.component';
import NavBar from './components/navbar';
import SignupLogin from './components/signup-login';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            uid: ''
        }

        this.updateInfo = this.updateInfo.bind(this);
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                // const displayName = user.displayName;
                const email = user.email;
                // const emailVerified = user.emailVerified;
                const uid = user.uid;
                // const providerData = user.providerData;

                this.updateInfo(email, uid);
            } else {
                console.debug("No User Logged In")
            }

        }.bind(this), function (error) {
            console.log(error);
        }).bind(this);
    }

    updateInfo(email, uid) {
        this.setState({
            email,
            uid
        })
    }
    render() {
        return (
            <Router>
                <NavBar loggedIn={this.state.email} />
                <div className="container">
                    <Switch>
                        <Route path="/" exact>
                            <TodoList userInfo={this.state} />
                        </Route>
                        <Route path="/auth" exact>
                            <SignupLogin />
                        </Route>
                        <Route path="/edit/:id">
                            <EditTodo />
                        </Route>
                        <Route path="/create">
                            <CreateTodo />
                        </Route>
                    </Switch>
                </div>
                <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.5.1/firebase-ui-auth.css" />
            </Router>
        );
    }
}

export default App;
