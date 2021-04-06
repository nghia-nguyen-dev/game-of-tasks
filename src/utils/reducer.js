export const initialState = {
	show: "all",
	tasks: {
		complete: [],
		todo: [],
	},
	isEditOn: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default reducer;