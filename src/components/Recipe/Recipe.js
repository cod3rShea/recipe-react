import React, { useState } from "react";
import Results from "../Results/Results";

const Recipe = () => {
	const apiURL = `${process.env.REACT_APP_Recipe_Acount_URL}&q=pizza&app_id=${process.env.REACT_APP_Recipe_Acount_KEY}&app_key=${process.env.REACT_APP_Recipe_API_KEY}`;

	return (
		<div>
			<form>
				<input />
				<button />
			</form>
		</div>
	);
};

export default Recipe;
