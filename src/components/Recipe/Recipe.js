import React, { useEffect, useState } from "react";
import Results from "../Results/Results";

const Recipe = () => {
	const [recipes, setRecipes] = useState([]);
	const [recipeSearch, setRecipeSearch] = useState("");
	const [foodQuery, setFoodQuery] = useState("");

	useEffect(() => {
		getRecipe();
	}, [foodQuery]);

	const getRecipe = async () => {
		const apiURL = `${process.env.REACT_APP_Recipe_Acount_URL}&q=${foodQuery}&app_id=${process.env.REACT_APP_Recipe_Acount_KEY}&app_key=${process.env.REACT_APP_Recipe_API_KEY}`;
		const response = await fetch(apiURL);
		const data = await response.json();
		setRecipes(data.hits);
	};

	const updateRecipeSearch = (e) => {
		setRecipeSearch(e.target.value);
	};
	const getRecipeSearch = (e) => {
		e.preventDefault();
		setFoodQuery(recipeSearch);
		setRecipeSearch("");
	};

	// renders first on page because foodQuery will be empty
	if (foodQuery === "") {
		return (
			<div>
				<h1>Search For A Recipe</h1>
				<form onSubmit={getRecipeSearch}>
					<input value={recipeSearch} onChange={updateRecipeSearch} />
					<button type="submit">Find Recipe</button>
				</form>
			</div>
		);
	}
	//Renders on submit and passes recipes into results component
	return (
		<div>
			<h2>Below are you results for {foodQuery}</h2>
			<form onSubmit={getRecipeSearch}>
				<input value={recipeSearch} onChange={updateRecipeSearch} />
				<button type="submit">Find Recipe</button>
			</form>
			<Results data={recipes} />
		</div>
	);
};

export default Recipe;
