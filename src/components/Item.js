import React, { useContext } from "react";
import DeleteIcon from "components/DeleteIcon";
import EditIcon from "components/EditIcon";
import TaskContext from "utils/TaskContext";
import { toggleTask } from "utils/actions";

const Item = ({ title, id, isComplete }) => {
	const { dispatch } = useContext(TaskContext);

	console.log(isComplete)

	const handleClick = () => dispatch(toggleTask(id));

	return (
		<li className="Item" onClick={handleClick}>
			<p className="Item--text">{title}</p>
			<div className="Todos-icons">
				<EditIcon />
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
