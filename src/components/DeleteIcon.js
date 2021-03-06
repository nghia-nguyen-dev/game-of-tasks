import React, { useContext } from "react";
import { deleteTask } from "utils/actions";
import TaskContext from "utils/TaskContext";

const DeleteIcon = ({ id }) => {
	const { dispatch } = useContext(TaskContext);

	const handleClick = () => dispatch(deleteTask(id));

	return (
		<svg
			onClick={handleClick}
			className="DeleteIcon"
			width="33px"
			height="33px"
			viewBox="0 0 33 33"
			version="1.1"
		>
			<title>Group 5</title>
			<g
				id="Page-1"
				stroke="none"
				stroke-width="1"
				fill="none"
				fill-rule="evenodd"
			>
				<g id="Group-5">
					<polygon id="Path" points="0 0 33 0 33 33 0 33"></polygon>
					<polygon
						id="Path"
						fill="#EBD19B"
						fill-rule="nonzero"
						points="28.9166667 6.50946429 26.4072024 4 16.4583333 13.948869 6.50946429 4 4 6.50946429 13.948869 16.4583333 4 26.4072024 6.50946429 28.9166667 16.4583333 18.9677976 26.4072024 28.9166667 28.9166667 26.4072024 18.9677976 16.4583333"
					></polygon>
				</g>
			</g>
		</svg>
	);
};

export default DeleteIcon;
