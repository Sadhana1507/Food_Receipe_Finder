import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RecipeDetails from "./components/RecipeDetails";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import { auth } from "./firebase/firebase"; // Import auth from firebase

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/Home" element={<Home />} />
					<Route path="/recipe/:id" element={<RecipeDetails />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
