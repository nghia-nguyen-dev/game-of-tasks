import React, { useReducer } from "react";
import TaskBar from "components/TaskBar";
import Filter from "components/Filter";
import Todos from "components/Todos";
import TaskContext from "utils/TaskContext";
import reducer from "utils/reducer";
import { initialState } from "utils/reducer";
import FloorFade from "components/FloorFade"

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	console.log(state);
	localStorage.state = JSON.stringify(state);

	return (
		<TaskContext.Provider value={{ state, dispatch }}>
			<div className="App">
				<main>
					<TaskBar />
					<Todos />
				</main>
				<Filter />
			</div>
			<FloorFade/>
		</TaskContext.Provider>
	);
};

export default App;
