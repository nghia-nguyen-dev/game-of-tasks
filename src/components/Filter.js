import React, { useContext } from "react";
import { clearTasks, crossTasks } from "utils/actions";
import { remaining } from "utils/helpers";
import TaskContext from "utils/TaskContext";

const Filter = () => {
	const { state, dispatch } = useContext(TaskContext);

	const handleClick = e => {
		console.log(e.target.textContent);
		switch (e.target.textContent) {
			case "clear":
				dispatch(clearTasks());

			case "check all":
				dispatch(crossTasks())
		}
	};

	return (
		<div className="Filter" onClick={handleClick}>
			<h2 className="Filter__label">Filter</h2>
			<div className="Status">
				<p>all</p>
				<p>complete</p>
				<p>todo</p>
			</div>
			<div className="Actions">
				<p>check all</p>
				<p>clear</p>
			</div>
			<div className="Tracker">
				<p>remaining</p>
				<p className="Tracker__number">{remaining(state)}</p>
			</div>
		</div>
	);
};

export default Filter;
