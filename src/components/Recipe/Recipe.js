import React, { useEffect, useState } from "react";
import Results from "../Results/Results";

const Recipe = () => {
	const [foodQuery, setFoodQuery] = useState("");
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		getRecipe();
	}, []);

	const getRecipe = async () => {
		const apiURL = `${process.env.REACT_APP_Recipe_Acount_URL}&q=${foodQuery}&app_id=${process.env.REACT_APP_Recipe_Acount_KEY}&app_key=${process.env.REACT_APP_Recipe_API_KEY}`;
		const response = await fetch(apiURL);
		const data = await response.json();
		setRecipes(data.hits);
	};

	if (foodQuery == "") {
		return (
			<div>
				<h1>Search For A Recipe</h1>
				<form>
					<input />
					<button> Find Recipe</button>
				</form>
			</div>
		);
	}

	return (
		<div>
			<form>
				<input />
				<button> Find Recipe</button>
			</form>
			<Results data={recipes} />
		</div>
	);
};

export default Recipe;
