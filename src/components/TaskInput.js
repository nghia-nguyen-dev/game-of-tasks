import React from "react";

const TaskInput = ({ handleSubmit, input, title, setInput }) => {
    const handleChange = e => setInput(e.target.value);

	return (
		<form onSubmit={handleSubmit}>
			<input
				autoFocus
				type="text"
				onChange={handleChange}
				value={input}
				className="Item__input"
				placeholder={title}
			></input>
		</form>
	);
};

export default TaskInput;
