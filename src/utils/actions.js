import { nanoid } from "nanoid";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const addTask = input => ({
	type: ADD_TASK,
	task: { id: nanoid(), title: input, isComplete: false },
});

export const deleteTask = id => {
	return { type: DELETE_TASK, id };
};
