import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDYEDRrWahTv2wMQA6BezNhgxHqeMPuti0",
	authDomain: "food-receipe-finder.firebaseapp.com",
	projectId: "food-receipe-finder",
	storageBucket: "food-receipe-finder.appspot.com",
	messagingSenderId: "277206468553",
	appId: "1:277206468553:web:63f8201fea8c5202dd4a18",
	measurementId: "G-TZRF9SMXDB",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
