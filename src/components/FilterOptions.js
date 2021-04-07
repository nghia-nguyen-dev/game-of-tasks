import React, { useContext } from "react";
import { ALL, COMPLETE, TODO } from "utils/options";
import TaskContext from "utils/TaskContext";

const options = [ALL, COMPLETE, TODO];

const FilterOptions = () => {
	const { state } = useContext(TaskContext);

	const isActive = option =>
		state.show === option ? "Status--active" : null;

	const renderedOptions = options.map(option => (
		<p key={option} className={isActive(option)}>
			{option}
		</p>
	));

	return <div className="Status">{renderedOptions}</div>;
};

export default FilterOptions;
