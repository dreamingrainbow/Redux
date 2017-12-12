export const SELECTED_TODO = 'SELECTED_TODO';
export const NEW_TODO = 'NEW_TODO';

export const selectTodo = (todo) => {
	return {
		type: SELECTED_TODO,
		payload: todo
	};
};

export const addTodo = (todo) => {
	return{ 
		type: NEW_TODO,
		payload: todo
	};
};
