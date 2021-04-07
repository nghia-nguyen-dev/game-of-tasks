import React, { useContext } from "react";
import { clearTasks, crossTasks } from "utils/actions";
import { remaining } from "utils/helpers";
import TaskContext from "utils/TaskContext";
import * as options from "utils/options"


const Filter = () => {
	const { state, dispatch } = useContext(TaskContext);

	const handleClick = e => {
		console.log(e.target.textContent);
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
			<div className="Status">
				<p>{options.ALL}</p>
				<p>{options.COMPLETE}</p>
				<p>{options.TODO}</p>
			</div>
			<div className="Actions">
				<p>{state.checkAll === true ? options.UNCHECK_ALL : options.CHECK_ALL}</p>
				<p>{options.CLEAR}</p>
			</div>
			<div className="Tracker">
				<p>remaining</p>
				<p className="Tracker__number">{remaining(state)}</p>
			</div>
		</div>
	);
};

export default Filter;
