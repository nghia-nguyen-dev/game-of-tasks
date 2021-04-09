import React, { useContext, useState, useEffect } from "react";
import DeleteIcon from "components/DeleteIcon";
import EditIcon from "components/EditIcon";
import TaskContext from "utils/TaskContext";
import { updateTask } from "utils/actions";
import TaskDefault from "components/TaskDefault";
import TaskInput from "components/TaskInput";

const Item = ({ id, title, isComplete }) => {
	const { state, dispatch } = useContext(TaskContext);
	const [input, setInput] = useState("");

	useEffect(() => {
		if (state.edit.isOn) {
			document.addEventListener("click", handleSubmit);
			return () => document.removeEventListener("click", handleSubmit);
		}
	}, [input]);

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(updateTask(input, id));
		setInput("");
	};

	const taskView =
		state.edit.id === id && state.edit.isOn ? (
			<TaskInput
				handleSubmit={handleSubmit}
				input={input}
				setInput={setInput}
				title={title}
			/>
		) : (
			<TaskDefault id={id} isComplete={isComplete} title={title} />
		);

	return (
		<li className="Item">
			{taskView}
			<div className="Todos-icons">
				<EditIcon id={id} isComplete={isComplete} />
				<DeleteIcon id={id} />
			</div>
		</li>
	);
};

export default Item;
