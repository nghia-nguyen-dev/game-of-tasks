import React, { useContext } from "react";
import { ALL, COMPLETE, TODO } from "utils/options";
import TaskContext from "utils/TaskContext";

const options = [ALL, COMPLETE, TODO];

const FilterOptions = () => {
	const { state } = useContext(TaskContext);

	const getCount = option => {
		switch (option) {
			case ALL:
				return state.tasks.length;

			case COMPLETE:
				return state.tasks.filter(task => task.isComplete).length;

			case TODO:
				return state.tasks.filter(task => !task.isComplete).length;

			default:
				return 0;
		}
	};

	const isActive = option => (state.show === option ? "active" : null);

	const renderedOptions = options.map(option => (
		<li className={`Option`} key={option}>
			<p className={`Option__label Option__label--${isActive(option)}`}>
				{option}
			</p>
			<p
				className={`Option__counter Option__counter--${isActive(
					option
				)}`}
			>
				{getCount(option)}
			</p>
		</li>
	));

	return <ul className="FilterOptions">{renderedOptions}</ul>;
};

export default FilterOptions;
