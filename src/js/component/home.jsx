import React from "react";

//include images into your bundle
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
		</div>
	);
};

export default Home;
