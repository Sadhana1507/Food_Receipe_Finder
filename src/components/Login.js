import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { auth } from "../firebase/firebase";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate(); // Use useNavigate hook to obtain the navigate function

	const handleLogin = async () => {
		try {
			await auth.signInWithEmailAndPassword(email, password);
			// Redirect user to home page after successful login
			navigate("/Home"); // Navigate to the home page
		} catch (error) {
			console.error("Error signing in:", error.message);
		}
	};

	return (
		<div>
			<h2>Login</h2>
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Email"
			/>
			<input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Password"
			/>
			<button onClick={handleLogin}>Login</button>
			{/* Add Link to Register page */}
			<p>
				Don't have an account? <Link to="/register">Register</Link>
			</p>
		</div>
	);
}

export default Login;
