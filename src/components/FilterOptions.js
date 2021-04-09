import React, { useContext } from "react";
import { ALL, COMPLETE, TODO } from "utils/options";
import TaskContext from "utils/TaskContext";

const options = [ALL, COMPLETE, TODO];

const FilterOptions = () => {
	const { state } = useContext(TaskContext);

	const getCount = option => {
		return 1;
	};

	const isActive = option =>
		state.show === option ? "Option--active" : null;

	const renderedOptions = options.map(option => (
		<li className={`Option ${isActive(option)}`} key={option}>
			<p className="Option__label">{option}</p>
			<p className="Option__counter">{getCount()}</p>
		</li>
	));

	return <ul className="FilterOptions">{renderedOptions}</ul>;
};

export default FilterOptions;
