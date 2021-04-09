import { nanoid } from "nanoid";

// ACTIONS
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const CLEAR_TASKS = "CLEAR_TASKS";
export const TOGGLE_ALL = "TOGGLE_ALL";
export const UPDATE_FILTER = "UPDATE_FILTER";

// ACTION CREATORS
export const addTask = input => ({
	type: ADD_TASK,
	task: { id: nanoid(), title: input, isComplete: false },
});

export const deleteTask = id => ({ type: DELETE_TASK, id });
export const toggleTask = id => ({ type: TOGGLE_TASK, id });
export const editTask = id => ({ type: EDIT_TASK, id });
export const updateTask = input => ({ type: UPDATE_TASK, input });
export const clearTasks = () => ({ type: CLEAR_TASKS });
export const crossTasks = () => ({ type: TOGGLE_ALL });
export const updateFilter = textContent => ({ type: UPDATE_FILTER, filter: textContent })
