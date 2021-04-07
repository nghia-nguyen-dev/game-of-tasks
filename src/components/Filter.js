import React, { useContext } from "react";
import { clearTasks, crossTasks } from "utils/actions";
import TaskContext from "utils/TaskContext";
import * as options from "utils/options";
import Tracker from "components/Tracker";
import FilterOptions from "components/FilterOptions";

const Filter = () => {
	const { state, dispatch } = useContext(TaskContext);

	const handleClick = e => {
		switch (e.target.textContent) {
			case options.CLEAR:
				dispatch(clearTasks());

			case options.CHECK_ALL:
			case options.UNCHECK_ALL:
				dispatch(crossTasks());
		}
	};

	return (
		<div className="Filter" onClick={handleClick}>
			<h2 className="Filter__label">Filter</h2>
			<FilterOptions />
			<div className="Actions">
				<p>
					{state.checkAll === true
						? options.UNCHECK_ALL
						: options.CHECK_ALL}
				</p>
				<p>{options.CLEAR}</p>
			</div>
			<Tracker />
		</div>
	);
};

export default Filter;
