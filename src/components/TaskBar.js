import React from "react";

const TaskBar = () => {
	return (
		<div className="TaskBar">
			<input type="text" placeholder="Add Task"></input>
			<button className="btn">
				<svg
					width="28px"
					height="28px"
					viewBox="0 0 29 29"
					version="1.1"
				>
					<g
						id="Page-1"
						stroke="none"
						stroke-width="1"
						fill="none"
						fill-rule="evenodd"
					>
						<g className="add-icon"
							id="TODOS-Copy"
							transform="translate(-1045.000000, -24.000000)"
							fill="#1A1E1E"
							fill-rule="nonzero"
						>
							<g
								id="Group"
								transform="translate(1033.000000, 12.000000)"
							>
								<polygon
									id="+"
									points="27.84 40.008 27.84 27.768 40.08 27.768 40.08 24.312 27.84 24.312 27.84 12 24.312 12 24.312 24.312 12 24.312 12 27.768 24.312 27.768 24.312 40.008"
								></polygon>
							</g>
						</g>
					</g>
				</svg>
			</button>
		</div>
	);
};

export default TaskBar;
