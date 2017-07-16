import React from 'react'
import { connect } from 'react-redux'
import App from '../components/App'
import actions from '../actions'

const AppContainer = connect(
    function mapStateToProps(state) {
	return {
	    todos: state
	};
    },

    function mapDispatchToProps(dispatch) {
	return {
	    addTodo: (title, description) => {
		dispatch(actions.addTodo(title, description))
	    },
	    fetchTodos: () => {
		dispatch(actions.fetchTodos())
	    },
	    completeTodo: (id) => {
		dispatch(actions.completeTodo(id))
	    },
	    deleteTodo: (id) => {
		dispatch(actions.deleteTodo(id))
	    }
	}
    }
)(App);

export default AppContainer
