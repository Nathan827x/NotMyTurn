import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Firebase from './firebase';

import TodoList from './components/todos-list.component.js';
import EditTodo from './components/edit-todo.component';
import CreateTodo from './components/create-todo.component';
import { NavBar } from './components/navbar.js';

class App extends Component {
    constructor(props) {
        super(props);

        // This will intilize Firebase
        const fb = Firebase;

        this.state = {
            developers: []
        }
    }
    render() {
        return (
            <Router>
                <NavBar />
                <div className="container">
                    <Switch>
                        <Route path="/" exact>
                            <TodoList />
                        </Route>
                        <Route path="/edit/:id">
                            <EditTodo />
                        </Route>
                        <Route path="/create">
                            <CreateTodo />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
