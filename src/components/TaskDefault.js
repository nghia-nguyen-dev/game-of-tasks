import React, { useContext } from "react";
import TaskContext from "utils/TaskContext";
import { toggleTask } from "utils/actions";

const TaskDefault = ({ isComplete, title, id }) => {
	const { dispatch } = useContext(TaskContext);

	const handleClick = () => dispatch(toggleTask(id));

	return (
		<p
			className={`Item__text ${isComplete && "Item__complete"}`}
			onClick={handleClick}
		>
			{title}
		</p>
	);
};

export default TaskDefault;
