import React, { useContext } from "react";
import DeleteIcon from "components/DeleteIcon";
import EditIcon from "components/EditIcon";
import TaskContext from "utils/TaskContext";
import { toggleTask } from "utils/actions";

const Item = ({ title, id, isComplete }) => {
	const { dispatch } = useContext(TaskContext);

	const handleClick = () => dispatch(toggleTask(id));

	// const defaultView = <p className="Item--text">{input}</p>;
	// const editView = <input type="text" onChange={handleChange}></input>;

	return (
		<li className="Item">
			<p
				className={`Item--text ${isComplete && "Item--complete"}`}
				onClick={handleClick}
			>
				{title}
			</p>
			<div className="Todos-icons">
				<EditIcon id={id} />
				<DeleteIcon id={id} />
			</div>
		</li>
	);
};

export default Item;

// const Item = () => {
// 	const [editText, setEditText] = useState(false);
// 	const [input, setInput] = useState("todo list");

// 	const handleClick = () => setEditText(prev => !prev);
// 	const handleChange = e => setInput(e.target.value);

// 	const defaultView = <p className="Item--text">{input}</p>;
// 	const editView = <input type="text" onChange={handleChange}></input>;

// 	return (
// 		<div className="Item" onDoubleClick={handleClick}>
// 			{!editText ? defaultView : editView}
// 			<div className="Todos-icons">
// 				<EditIcon />
// 				<DeleteIcon />
// 			</div>
// 		</div>
// 	);
// };
