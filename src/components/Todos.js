import React, { useContext } from "react";
import Item from "components/Item";
import TaskContext from "utils/TaskContext";
import { COMPLETE, TODO } from "utils/options";

const Todos = () => {
	const { state } = useContext(TaskContext);

	const renderedTasks = () => {
		const { tasks, show, isComplete } = state;

		switch (show) {
			case COMPLETE:
				return tasks
					.filter(task => isComplete && task)
					.map(task => <Item key={task.id} {...task} />);

			case TODO:
				return tasks
					.filter(task => !isComplete && task)
					.map(task => <Item key={task.id} {...task} />);

			default:
				return tasks.map(task => <Item key={task.id} {...task} />);
		}
	};

	console.log(state)
	return <ul className="Todos">{renderedTasks()}</ul>;
};

export default Todos;
