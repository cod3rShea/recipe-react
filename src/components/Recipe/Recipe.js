import React, { useEffect, useState } from "react";
import Results from "../Results/Results";

const Recipe = () => {
	const [foodQuery, setFoodQuery] = useState("pizza");

	useEffect(() => {
		getRecipe();
	}, []);

	const getRecipe = async () => {
		const apiURL = `${process.env.REACT_APP_Recipe_Acount_URL}&q=${foodQuery}&app_id=${process.env.REACT_APP_Recipe_Acount_KEY}&app_key=${process.env.REACT_APP_Recipe_API_KEY}`;
		const response = await fetch(apiURL);
		const data = await response.json();
		console.log(data.hits);
	};

	return (
		<div>
			<form>
				<input />
				<button> Find Recipe</button>
			</form>
		</div>
	);
};

export default Recipe;
