const API_KEY = "f453e07fadb83f3e21dc3773d36c68f7";
const API_ID = "3b260193";

export const getRecipes = async (query) => {
	const response = await fetch(
		`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
	);
	const data = await response.json();
	return data.hits.map((hit) => ({
		id: hit.recipe.uri,
		title: hit.recipe.label,
		image: hit.recipe.image,
		calories: Math.round(hit.recipe.calories),
		// Additional recipe details
	}));
};
export const getRecipeDetails = async (id) => {
	const response = await fetch(
		`https://api.edamam.com/search?r=${encodeURIComponent(id)}&app_id=${API_ID}&app_key=${API_KEY}`
	);
	const data = await response.json();
	if (data.length > 0) {
		const recipe = data[0];
		return {
			id: recipe.uri,
			title: recipe.label,
			image: recipe.image,
			calories: Math.round(recipe.calories),
			// Additional recipe details
		};
	}
	return null;
};
