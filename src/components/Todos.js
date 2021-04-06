import React, { useContext } from "react";
import Item from "components/Item";
import TaskContext from "utils/TaskContext";

const Todos = () => {
	const { state } = useContext(TaskContext);
	const renderedTasks = state.tasks.map(({ task }) => <Item task={task} />);
	return <div className="Todos">{renderedTasks}</div>;
};

export default Todos;
