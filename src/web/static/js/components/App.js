import React from 'react'
import TodoList from './TodoList'
import TodoListForm from './TodoListForm'

export default class App extends React.Component {
    componentDidMount() {
	console.log("props is: " + this.props.fetchTodos);
	//fetchTodos = this.props.fetchTodos;
	//console.log("fetchTodos is: " + this.fetchTodos);
	console.log("Todos is: " + this.props.todos);
	this.props.fetchTodos()
	console.log("Now todos is: " + this.props.todos);
    }
    
    render() {
	return (
		<div id="mainContainer">
		<h2>Todo App</h2>
		<TodoList title="My Tasks" todos={this.props.todos} completeTodo={this.props.completeTodo} deleteTodo={this.props.deleteTodo} />
		<TodoListForm addTodo={this.props.addTodo}  />
		</div>
	)
    }
}
