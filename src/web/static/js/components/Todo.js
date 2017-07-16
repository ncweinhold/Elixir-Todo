import React from 'react'

export default class Todo extends React.Component {
    handleCompleted(id) {
	this.props.completeTodo(id);
    }
    
    render() {
	const { todo, completeTodo, deleteTodo } = this.props
	return (
	      <li>
	      <h5>{todo.title}</h5>
	      <p>{todo.description}</p>
		<input className="toggle" type="checkbox" checked={todo.completed} onChange={() => {::this.handleCompleted(todo.id)}} />
		<button className="delete" onClick={() => this.props.deleteTodo(todo.id)}>Delete</button>
		</li>
	)
    }
}

/*const Todo = (todo) => (
    const { todo } = this.props
	<li>
	<h5>{todo.title}</h5>
	<p>{todo.description}</p>
        
	</li>
)

export default Todo*/
