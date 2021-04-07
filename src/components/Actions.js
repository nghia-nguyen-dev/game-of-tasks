import React, { useContext } from "react";
import * as options from "utils/options";
import TaskContext from "utils/TaskContext";

const Actions = () => {
	const { state } = useContext(TaskContext);

	return (
		<div className="Actions">
			<p>
				{state.checkAll === true
					? options.UNCHECK_ALL
					: options.CHECK_ALL}
			</p>
			<p>{options.CLEAR}</p>
		</div>
	);
};

export default Actions;
