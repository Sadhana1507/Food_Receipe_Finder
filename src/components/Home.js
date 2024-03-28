import React, { useState } from "react";
import RecipeList from "./RecipeList";
import SearchForm from "./SearchForm";

function Home() {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (query) => {
		setSearchQuery(query);
	};

	return (
		<div class="p-5 mb-4 bg-black rounded-3 d-flex flex-wrap justify-content-around">
			<SearchForm onSearch={handleSearch} />
			<RecipeList searchQuery={searchQuery} />
		</div>
	);
}

export default Home;
