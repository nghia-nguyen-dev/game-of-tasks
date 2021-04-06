export const initialState = {
	show: "all",
	tasks: [],
	isEditOn: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TASK":
			if (!action.payload.task) return state;
			return {
				...state,
				tasks: [...state.tasks, action.payload],
			};

		default:
			return state;
	}
};

export default reducer;
