import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeResponsible = this.onChangeResponsible.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_completed: false
        }
    }

    onChangeDesc(desc) {
        this.setState({
            todo_description: desc.target.value
        });
    }

    onChangeResponsible(person) {
        this.setState({
            todo_responsible: person.target.value
        });
    }

    onSubmit(e) {
        // To prevent the default sumbit action for this method.
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);

        const newTodo = {
            todo_desc: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_completed: this.state.todo_completed
        };

        axios.post('http://localhost:4000/add', newTodo)
            .then(res => console.debug(res.data));

        // Reset the state
        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_completed: ''
        })
    }

    render() {
        return (
            <div>
                <h2> Create Chore</h2>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Descirption: </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a description of the task"
                            value={this.state.todo_description}
                            onChange={this.onChangeDesc}
                        />
                    </div>

                    {/* TODO: Figure out how to set displaynames for this */}
                    <div className="form-group">
                        <label>List of housemates: </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a list of people. ex. Bob@email.com, John@email.com, Timmy@email.com"
                            value={this.state.todo_responsible}
                            onChange={this.onChangeResponsible}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}