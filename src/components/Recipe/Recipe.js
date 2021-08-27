import React, { useState } from "react";
import Results from "../Results/Results";

const Recipe = () => {
	const [yourRecipe, setYourRecipe] = useState("");

	const recipeCall = () => {
		getIngredients();
	};

	async function getIngredients(recipe) {
		const apiKey = "a366a414f28d41989a4cb9503589bb62";
		const food = yourRecipe;
		const INGREDIENTS_URL = `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${food}`;
		const res = await fetch(INGREDIENTS_URL, {
			method: "GET",
			body: JSON.stringify(recipe),
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		});
		//console.log(res);
		const data = await res.json();
		console.log(data);
	}

	return (
		<div>
			<input
				name="yourRecipe"
				value={yourRecipe}
				placeholder="Look Up Food"
				onChange={(e) => setYourRecipe(e.target.value)}
			/>
			<button onClick={recipeCall}>Test</button>
		</div>
	);
};

export default Recipe;
