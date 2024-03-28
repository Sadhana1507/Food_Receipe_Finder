import React, { useState } from "react";
import { auth } from "../firebase/firebase";

function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleRegister = async () => {
		try {
			await auth.createUserWithEmailAndPassword(email, password);
			// Redirect user or perform additional actions after successful registration
		} catch (error) {
			console.error("Error registering user:", error.message);
		}
	};

	return (
		<div>
			<h2>Register</h2>
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
			<button onClick={handleRegister}>Register</button>
		</div>
	);
}

export default Register;
