import React from "react";
import TaskBar from "components/TaskBar";
import Filter from "components/Filter";
import Todos from 'components/Todos'

const App = () => {
	return (
		<div className="App">
			<main>
				<TaskBar />
                <Todos/>
			</main>
			<Filter />
		</div>
	);
};

export default App;
