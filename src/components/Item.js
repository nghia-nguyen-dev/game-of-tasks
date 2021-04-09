import React, { useContext, useState, useEffect } from "react";
import DeleteIcon from "components/DeleteIcon";
import EditIcon from "components/EditIcon";
import TaskContext from "utils/TaskContext";
import { toggleTask, updateTask } from "utils/actions";

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

	const handleChange = e => setInput(e.target.value);
	const handleClick = () => dispatch(toggleTask(id));

	const defaultView = (
		<p
			className={`Item__text ${isComplete && "Item__complete"}`}
			onClick={handleClick}
		>
			{title}
		</p>
	);

	const inputView = (
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

	return (
		<li className="Item">
			{state.edit.id === id && state.edit.isOn
				? inputView
				: defaultView}
			<div className="Todos-icons">
				<EditIcon id={id} isComplete={isComplete} />
				<DeleteIcon id={id} />
			</div>
		</li>
	);
};

export default Item;
