import React, { useContext } from "react";
import Item from "components/Item";
import TaskContext from "utils/TaskContext";

const Todos = () => {
	const { state } = useContext(TaskContext);
	const renderedTasks = state.tasks.map(task => (
		<Item key={task.id} {...task} />
	));
	console.log(state.tasks)
	return <ul className="Todos">{renderedTasks}</ul>;
};

export default Todos;
