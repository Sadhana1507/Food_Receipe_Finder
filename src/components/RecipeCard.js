import React from "react";

function RecipeCard({ recipe }) {
	return (
		<div className="recipe-card card m-2">
			<h2>{recipe.title}</h2>
			<img
				src={recipe.image}
				alt={recipe.title}
				className="card-img-top"
				style={{ width: "300PX", height: "200px", objectFit: "cover" }}
			/>
			<div className="card-body text-center">
				<a className="card-header">{recipe.title}</a>
				<p className="card-text">Calories: {recipe.calories}</p>
			</div>
		</div>
	);
}

export default RecipeCard;
