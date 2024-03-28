import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { getRecipes } from "../api";

function RecipeList({ searchQuery }) {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		if (searchQuery) {
			getRecipes(searchQuery).then((data) => setRecipes(data));
		}
	}, [searchQuery]);

	return (
		<div class="p-5 mb-4 bg-black rounded-3 d-flex flex-wrap justify-content-around">
			{recipes.map((recipe) => (
				<RecipeCard key={recipe.id} recipe={recipe} />
			))}
		</div>
	);
}

export default RecipeList;
