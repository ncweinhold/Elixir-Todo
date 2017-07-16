export default function reducer(state = [], action) {
    console.log("in the reducer with action.type: " + action.type);
    switch (action.type) {
    case 'ADD_TODO':
	console.log("In add_todo");
	return [
		...state,
	    {
		//id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
		id: action.response.data.id,
		title: action.title,
		description: action.description,
		completed: false
	    },
	]
    case 'FETCHED_TODOS':
	return [ ...state ].concat(action.response.data)
    case 'DELETED_TODO':
	console.log("Deleted Todo ID is: " + action.id);
	return state.filter(todo =>
			    todo.id !== action.id)
    case 'COMPLETED_TODO':
	return state.map(todo =>
			 todo.id === action.response.data.id ?
			 { ...todo,
			   title: action.response.data.title,
			   description: action.response.data.description,
			   completed: action.response.data.completed } :
			 todo)
    default:
	console.log("in default");
	return state
    }
}
