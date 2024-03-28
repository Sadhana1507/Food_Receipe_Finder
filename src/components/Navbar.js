import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav class="nav ">
			<ul class="d-flex container-fluid ">
				<li class="mx-4 ">
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/dashboard">Dashboard</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
