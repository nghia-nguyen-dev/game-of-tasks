import { nanoid } from "nanoid";
const ADD_TASK = "ADD_TASK";

export const addTask = input => ({
	type: ADD_TASK,
	task: { id: nanoid(), title: input, isComplete: false },
});
