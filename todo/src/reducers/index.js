import {
	NEW_TODO,
	SELECTED_TODO
} from '../actions';

export default (todos = [], action) => {
	switch(action.type) {
		case NEW_TODO:
			return [...todos, action.payload];
		case SELECTED_TODO:
			const newTodos = todos.slice(0);
			newTodos[action.payload].completed = !newTodos[action.payload].completed;
			return newTodos; 
		default:
			return todos;
	}
};
