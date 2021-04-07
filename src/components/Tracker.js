import React, { useContext } from "react";
import TaskContext from "utils/TaskContext";
import { remaining } from "utils/helpers";

const Tracker = () => {
	const { state } = useContext(TaskContext);

	return (
		<div className="Tracker">
			<p>remaining</p>
			<p className="Tracker__number">{remaining(state)}</p>
		</div>
	);
};

export default Tracker;
