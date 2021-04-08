import React, { useContext, useState } from "react";
import AddBtn from "components/AddBtn";
import TaskContext from "utils/TaskContext";
import { addTask } from "utils/actions";

const TaskBar = () => {
	const { dispatch } = useContext(TaskContext);
	const [input, setInput] = useState("");

	const handleChange = e => setInput(e.target.value);

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(addTask(input));
		setInput("");
	};

	return (
		<form className="TaskBar" onSubmit={handleSubmit}>
			<input
				value={input}
				onChange={handleChange}
				className="TaskBar__input"
				type="text"
				placeholder="Add Task"
			></input>
			<AddBtn />
		</form>
	);
};

export default TaskBar;
