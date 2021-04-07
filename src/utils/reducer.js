import { ADD_TASK, DELETE_TASK } from "./actions";

export const initialState = {
	tasks: [],
	show: "all",
	isEditOn: false,
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

		default:
			return state;
	}
};

export default reducer;
