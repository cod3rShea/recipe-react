import React from "react";

const Results = (data) => {
	const recipeData = data.data;
	console.log(recipeData);
	return (
		<div className="recipes-container">
			{recipeData.map((recipe) => (
				<div
					key={recipe.recipe.totalWeight}
					className="recipe-container"
				>
					<h2>{recipe.recipe.label}</h2>
					<img src={recipe.recipe.image} alt={recipe.recipe.label} />
					<div>{recipe.recipe.dishType}</div>
					<div>{recipe.recipe.healthLabels}</div>
				</div>
			))}
		</div>
	);
};

export default Results;
