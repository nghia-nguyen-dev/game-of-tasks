import { ADD_TASK, TOGGLE_TASK, DELETE_TASK, EDIT_TASK } from "./actions";

export const initialState = {
	tasks: [],
	editTask: "",
};

const reducer = (state, action) => {
	const { tasks } = state;

	switch (action.type) {
		case ADD_TASK:
			if (!action.task.title) return state;
			return {
				...state,
				tasks: [...tasks, action.task],
			};
		case DELETE_TASK:
			return {
				...state,
				tasks: tasks.filter(task => task.id !== action.id),
			};

		case TOGGLE_TASK:
			return {
				...state,
				tasks: tasks.map(task => {
					if (task.id === action.id) {
						return {
							...task,
							isComplete: !task.isComplete,
						};
					}
					return task;
				}),
			};

		case EDIT_TASK:
			return {
				...state,
				tasks: tasks.map(task => {
					if (task.id === action.id) {
						return {
							...task,
							editTask: true,
						};
					}
					return task;
				}),
			};

		default:
			return state;
	}
};

export default reducer;
