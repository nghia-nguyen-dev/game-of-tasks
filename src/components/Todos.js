import React, { useContext } from "react";
import Item from "components/Item";
import TaskContext from "utils/TaskContext";

const Todos = () => {
	const { state } = useContext(TaskContext);
	console.log(state.tasks)
	const renderedTasks = state.tasks.map(({ title, id, isComplete }) => (
		<Item title={title} key={id} id={id} isComplete={isComplete}/>
	));

	return <ul className="Todos">{renderedTasks}</ul>;
};

export default Todos;
