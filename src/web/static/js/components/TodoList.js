import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
    
    render() {
	const { title, todos } = this.props
	return (
		<div id="todoList">
		<h3>{title}</h3>
		<ul>
		{todos.map(todo =>
			   <Todo
			   key={todo.id}
			   todo={todo}
			   completeTodo={this.props.completeTodo}
			   deleteTodo={this.props.deleteTodo}
			   />
			  )
		}
	    </ul>
		</div>
	)
    }
}
