import React, { useContext } from "react";
import { clearTasks, crossTasks, updateFilter } from "utils/actions";
import TaskContext from "utils/TaskContext";
import * as options from "utils/options";
import Tracker from "components/Tracker";
import FilterOptions from "components/FilterOptions";
import Actions from "components/Actions";

const Filter = () => {
	const { state, dispatch } = useContext(TaskContext);

	const handleClick = e => {
		

		switch (e.target.textContent) {
			case options.CLEAR:
				dispatch(clearTasks());

			case options.CHECK_ALL:
			case options.UNCHECK_ALL:
				dispatch(crossTasks());

			case options.ALL:
			case options.COMPLETE:
			case options.TODO:
				dispatch(updateFilter(e.target.textContent));

			default:
				return;
		}
	};

	return (
		<div className="Filter" onClick={handleClick}>
			<h2 className="Filter__label">Filter</h2>
			<FilterOptions />
			<Actions />
			<Tracker />
		</div>
	);
};

export default Filter;
