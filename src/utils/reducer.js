import * as actions from "./actions";

export const initialState = {
	tasks: [],
	editTask: "",
};

const reducer = (state, action) => {
	const { tasks } = state;

	switch (action.type) {
		case actions.ADD_TASK:
			if (!action.task.title) return state;
			return {
				...state,
				tasks: [...tasks, action.task],
			};
		case actions.DELETE_TASK:
			return {
				...state,
				tasks: tasks.filter(task => task.id !== action.id),
			};

		case actions.TOGGLE_TASK:
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

		case actions.EDIT_TASK:
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

		case actions.UPDATE_TASK:
			return {
				...state,
				tasks: tasks.map(task => {
					if (task.id === action.id) {
						return {
							...task,
							title: action.input,
							editTask: false,
						};
					}
					return task;
				}),
			}

		default:
			return state;
	}
};

export default reducer;
