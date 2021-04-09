import React, { useContext } from "react";
import DeleteIcon from "components/DeleteIcon";
import EditIcon from "components/EditIcon";
import TaskContext from "utils/TaskContext";
import TaskDefault from "components/TaskDefault";
import TaskInput from "components/TaskInput";

const Item = ({ id, title, isComplete }) => {
	const { state } = useContext(TaskContext);

	const renderedTask =
		state.edit.id === id && state.edit.isOn ? (
			<TaskInput title={title} id={id} />
		) : (
			<TaskDefault id={id} isComplete={isComplete} title={title} />
		);

	return (
		<li className="Item">
			{renderedTask}
			<div className="Todos-icons">
				<EditIcon id={id} isComplete={isComplete} />
				<DeleteIcon id={id} />
			</div>
		</li>
	);
};

export default Item;
