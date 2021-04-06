const ADD_TASK = "ADD_TASK";

export const addTask = input => ({
	type: ADD_TASK,
	payload: { task: input, isComplete: false },
});
