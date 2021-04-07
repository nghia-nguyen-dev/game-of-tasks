export const initialState = {
	tasks: [],
	show: "all",
	isEditOn: false,
};

const reducer = (state, action) => {
	const {tasks} = state;

	switch (action.type) {
		case "ADD_TASK":
			if (!action.payload.task) return state;
			return {
				...state,
				tasks: [...tasks, action.payload],
			};
		default:
			return state;
	}
};

export default reducer;
