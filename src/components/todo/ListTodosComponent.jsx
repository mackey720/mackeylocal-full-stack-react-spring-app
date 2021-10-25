import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'


class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos :
            [],
            message: null
        }

        this.deleteTodosClicked = this.deleteTodosClicked.bind(this)
        this.updateTodosClicked = this.updateTodosClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.refreshTodos();
        console.log(this.state)
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {
               this.setState({todos: response.data})
            }
        )
    }

    deleteTodosClicked(id){
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.deleteTodos(username, id)
        .then(
            response => {
                this.setState({message : `Delete of todo ${id} successful.`})
                this.refreshTodos()
            }
        )
    }

    updateTodosClicked(id){
        let username = AuthenticationService.getLoggedInUserName()
        this.props.history.push(`/todos/${id}`)
        TodoDataService.updateTodos(username, id)
        .then(
            response => {
                this.setState({message: `Update of todo ${id} successful.`})
                this.refreshTodos()
            }
        )
    }

    render() {
        return <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map (
                                todo =>
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                <td>{todo.done.toString()}</td>
                                <td><button className="btn btn-success" onClick={() => this.updateTodosClicked(todo.id)}>Update</button></td>
                                <td><button className="btn btn-warning" onClick={() => this.deleteTodosClicked(todo.id)}>Delete</button></td>
                            </tr>
                            ) }
                        </tbody>
                    </table>
                </div>
            </div>
    }
}

export default ListTodosComponent