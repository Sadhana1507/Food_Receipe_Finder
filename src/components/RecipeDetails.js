import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipeDetails } from "../api";

function RecipeDetails() {
	const { id } = useParams();
	const [recipe, setRecipe] = useState(null);

	useEffect(() => {
		getRecipeDetails(id).then((data) => setRecipe(data));
	}, [id]);

	if (!recipe) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h2>{recipe.title}</h2>
			<img src={recipe.image} alt={recipe.title} />
			<p>Calories: {recipe.calories}</p>
			{/* Display additional recipe details */}
		</div>
	);
}

export default RecipeDetails;
