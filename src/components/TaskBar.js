import React from "react";
import AddBtn from "components/AddBtn";

const TaskBar = () => {
	return (
		<div className="TaskBar">
			<input
				className="TaskBar--input"
				type="text"
				placeholder="Add Task"
			></input>
			<AddBtn />
		</div>
	);
};

export default TaskBar;
