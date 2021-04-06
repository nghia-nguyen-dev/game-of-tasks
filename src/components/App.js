import React, { useReducer } from "react";
import TaskBar from "components/TaskBar";
import Filter from "components/Filter";
import Todos from "components/Todos";
import TaskContext from "utils/TaskContext";

const task = {
	text: "do something",
	isComplete: false,
};

const initialState = {
	show: "all",
	tasks: {
		complete: [],
		todo: [],
	},
	isEditOn: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<TaskContext.Provider value={{ state, dispatch }}>
			<div className="App">
				<main>
					<TaskBar />
					<Todos />
				</main>
				<Filter />
			</div>
		</TaskContext.Provider>
	);
};

export default App;
