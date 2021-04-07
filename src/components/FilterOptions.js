import React from "react";
import * as options from "utils/options";

const FilterOptions = () => {
	return (
		<div className="Status">
			<p>{options.ALL}</p>
			<p>{options.COMPLETE}</p>
			<p>{options.TODO}</p>
		</div>
	);
};

export default FilterOptions;
