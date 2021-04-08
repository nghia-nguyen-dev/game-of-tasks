import React, { useContext } from "react";
import Item from "components/Item";
import TaskContext from "utils/TaskContext";
import { COMPLETE, TODO } from "utils/options";

const createItem = task => <Item key={task.id} {...task} />;
const isComplete = task => task.isComplete && task;
const isntComplete = task => !task.isComplete && task;

const Todos = () => {
	const { state } = useContext(TaskContext);

	const renderedTasks = () => {
		const { tasks, show } = state;
		switch (show) {
			case COMPLETE:
				return tasks.filter(isComplete).map(createItem);

			case TODO:
				return tasks.filter(isntComplete).map(createItem);

			default:
				return tasks.map(createItem);
		}
	};

	return <ul className="Todos">{renderedTasks()}</ul>;
};

export default Todos;
