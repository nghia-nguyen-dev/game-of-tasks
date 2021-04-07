import { nanoid } from "nanoid";

// ACTIONS
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const EDIT_TASK = "EDIT_TASK";

// ACTION CREATORS
export const addTask = input => ({
	type: ADD_TASK,
	task: { id: nanoid(), title: input, isComplete: false, editTask: false },
});

export const deleteTask = id => {
	return { type: DELETE_TASK, id };
};

export const toggleTask = id => {
	return {
		type: TOGGLE_TASK,
		id,
	};
};

export const editTask = id => {
	return {
		type: EDIT_TASK,
		id,
	};
};
