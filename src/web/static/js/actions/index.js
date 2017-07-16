import api from '../api';

//let nextTodoId = 3
//console.log(todos.length);
    
const actions = {
    addTodo: (title, description) => {
	return dispatch => {
	    api.post( {todo: {title: title, description: description}}).then((response) => {
		dispatch({
	            type: 'ADD_TODO',
	            title,
	            description,
		    response
		})
	    })
	}
    },

    fetchTodos: () => {
	console.log("In fetch todos in actions");
	return (dispatch) => api.fetch().then((response) => {
	    dispatch({type: 'FETCHED_TODOS', response})
	})
    },

    completeTodo: (id) => {
	console.log("Completing todo");
	return (dispatch) => {
	    api.complete(id).then((response) => {
		dispatch({type: 'COMPLETED_TODO', response})
	    })
	}
    },

    deleteTodo: (id) => {
	console.log("Deleting todo");
	//api.delete(id)
	//return dispatch({type: 'DELETED_TODO', id: id})
	return (dispatch) => {
	    api.delete(id).then(() => {
		dispatch({type: 'DELETED_TODO', id: id})
	    })
	}
    }
}

export default actions
