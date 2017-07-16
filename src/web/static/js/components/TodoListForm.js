import React from 'react'

export default class TodoListForm extends React.Component {

    _handleSubmit(e) {
	e.preventDefault();

	const { title, description } = this.refs;
	this.props.addTodo(title.value, description.value)

	this.refs.createTodo.reset();
    }

    render() {
	return(
		<div id="createTodoFormContainer">
		<h3>Add a new task</h3>
		<form id="createTodoForm" ref="createTodo" onSubmit={::this._handleSubmit}>
		<input type="text" ref="title" title="title" id="title" />
		<input type="text" ref="description" title="description" id="description" />
		<button type="submit">Create task</button>
		</form>
		</div>
	)
    }
}
