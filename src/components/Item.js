import React, { useContext, useState, useRef, useEffect } from "react";
import DeleteIcon from "components/DeleteIcon";
import EditIcon from "components/EditIcon";
import TaskContext from "utils/TaskContext";
import { toggleTask, updateTask } from "utils/actions";

const Item = ({ id, title, editTask, isComplete }) => {
	const { dispatch } = useContext(TaskContext);
	const [input, setInput] = useState("");
	const inputRef = useRef();

	useEffect(() => {
		if (editTask) {
			inputRef.current.focus();
			document.addEventListener("click", handleSubmit);
		}

		return () => document.removeEventListener("click", handleSubmit);
	}, [editTask, input]);

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
				ref={inputRef}
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
			{editTask ? inputView : defaultView}
			<div className="Todos-icons">
				<EditIcon id={id} isComplete={isComplete} />
				<DeleteIcon id={id} />
			</div>
		</li>
	);
};

export default Item;
