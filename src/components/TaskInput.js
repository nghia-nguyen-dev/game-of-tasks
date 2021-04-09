import React, { useState, useEffect, useContext, useCallback } from "react";
import TaskContext from "utils/TaskContext";
import { updateTask } from "utils/actions";

const TaskInput = ({ title, id }) => {
	const { dispatch } = useContext(TaskContext);
	const [input, setInput] = useState("");

    const memoizedHandleSubmit = useCallback(
		(e) => {
			e.preventDefault();
			e.stopPropagation(); // Combined with capture phase, this prevents other events from triggering
			dispatch(updateTask(input, id));
			setInput("");
		},
		[input, id, dispatch]
	);

	useEffect(() => {
		document.addEventListener("click", memoizedHandleSubmit, true);
		return () => document.removeEventListener("click", memoizedHandleSubmit, true);
	}, [input, memoizedHandleSubmit]);



	const handleSubmit = e => {
		e.preventDefault();
		e.stopPropagation(); // Combined with capture phase, this prevents other events from triggering
		dispatch(updateTask(input, id));
		setInput("");
	};

	const handleChange = e => setInput(e.target.value);

	return (
		<form onSubmit={handleSubmit}>
			<input
				autoFocus
				type="text"
				onChange={handleChange}
				value={input}
				className="Item__input"
				placeholder={title}
			></input>
		</form>
	);
};

export default TaskInput;
