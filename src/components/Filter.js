import React, { useContext } from "react";
import { remaining } from "utils/helpers";
import TaskContext from "utils/TaskContext";

const Filter = () => {
	const { state } = useContext(TaskContext);
	return (
		<div className="Filter">
			<h2 className="Filter__label">Filter</h2>
			<div className="Status">
				<p>all</p>
				<p>complete</p>
				<p>todo</p>
			</div>
			<div className="Actions">
				<p>Check all</p>
				<p>Clear</p>
			</div>
			<div className="Tracker">
				<p>Remaining</p>
				<p className="Tracker__number">{remaining(state)}</p>
			</div>
		</div>
	);
};

export default Filter;
