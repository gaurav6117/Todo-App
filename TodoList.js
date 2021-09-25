import React, { Component } from 'react'
import Button from './Button';
export class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = ({ title: "", body: "" });
        this.diction = [{ "id": 1, "title": "A", "body": "this is A" }, { "id": 2, "title": "B", "body": "this is B" }];
    }
    handler = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value })
    }
    addTask = () => {
        let len = this.diction.length + 1;
        let title = this.state.title;
        let body = this.state.body;
        if (body !== "" && title !== "") {
            let data = { "id": len, "title": title, "body": body };
            this.diction.push(data);
        }
        this.showTask();
    }
    updateTask = () => {
        console.log("update called");
    }
    deleteTask = () => {
        console.log('deleted');
    }
    showTask = () => {
        var ul = document.getElementById("tBody");
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        this.diction.map((element) => {
            // console.log(index);
            let tbody = document.getElementById("tBody");
            let tr = document.createElement("tr");
            tr.innerHTML = `<tr><td>${element.id}</td><td>${element.title}</td><td>${element.body}</td><td><button onClick={this.updateTask}>Update</button><button onClick={this.deleteTask}>Delete</button></td></tr>`;
            tbody.appendChild(tr);
        });
    }
    render() {
        return (
            <div>
                <h1>To DO List</h1>
                <h3>Add ToDo</h3>
                Title: <input type="textarea" name="title" onChange={this.handler} defaultValue=" " /><br /><br />
                Body: <input type="textarea" name="body" onChange={this.handler} defaultValue=" " /><br /><br />
                <p> {this.state.title}<br />{this.state.body} </p>
                <Button label="ADD" action={this.addTask}/>
                <table>
                    <thead>
                        <tr>
                            <td>S.no</td><td>Title</td><td>Body</td><td>Action</td>
                        </tr>
                    </thead>
                    <tbody id="tBody"></tbody>
                </table>
            </div>
        )
    }
}
export default TodoList
