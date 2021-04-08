import * as actions from "./actions";
import * as options from "utils/options";

export const initialState = {
	tasks: [],
	checkAll: false,
	show: options.ALL,
	edit: {
		isOn: false,
		task: "",
	},
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
				edit: {
					...state.edit,
					isOn: true,
				}
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
			};

		case actions.CLEAR_TASKS:
			return {
				...state,
				tasks: [],
			};
		case actions.TOGGLE_ALL:
			return {
				...state,
				tasks: tasks.map(task => ({
					...task,
					isComplete: !state.checkAll,
				})),
				checkAll: !state.checkAll,
			};

		case actions.UPDATE_FILTER:
			return {
				...state,
				show: action.filter,
			};

		default:
			return state;
	}
};

export default reducer;
