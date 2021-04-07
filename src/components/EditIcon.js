import React, { useContext } from "react";
import { editTask } from "utils/actions";
import TaskContext from "utils/TaskContext";

const EditIcon = ({ id, isComplete }) => {
	const { dispatch } = useContext(TaskContext);

	const handleClick = () => !isComplete && dispatch(editTask(id));

	return (
		<svg
			onClick={handleClick}
			className="EditIcon"
			width="33px"
			height="33px"
			viewBox="0 0 33 33"
			version="1.1"
		>
			<title>Group 6</title>
			<g
				id="Page-1"
				stroke="none"
				stroke-width="1"
				fill="none"
				fill-rule="evenodd"
			>
				<g id="Group-6">
					<polygon id="Path" points="0 0 33 0 33 33 0 33"></polygon>
					<path
						d="M4.125,23.71875 L4.125,28.875 L9.28125,28.875 L24.48875,13.6675 L19.3325,8.51125 L4.125,23.71875 Z M29.43875,8.7175 L24.2825,3.56125 L20.80375,7.05375 L25.96,12.21 L29.43875,8.7175 L29.43875,8.7175 Z"
						id="Shape"
						fill="#EBD19B"
						fill-rule="nonzero"
					></path>
				</g>
			</g>
		</svg>
	);
};

export default EditIcon;
