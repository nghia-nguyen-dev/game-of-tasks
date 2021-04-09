import React, { useState, useEffect, useContext } from "react";
import TaskContext from "utils/TaskContext";
import { updateTask } from "utils/actions";

const TaskInput = ({ title, id }) => {
	const { dispatch } = useContext(TaskContext);
	const [input, setInput] = useState("");

	useEffect(() => {
		document.addEventListener("click", handleSubmit);
		return () => document.removeEventListener("click", handleSubmit);
	}, [input]);

	const handleSubmit = e => {
		e.preventDefault();
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
