import React from "react";
import { Cards } from "../component/card";
import { Footer } from "../component/footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
		<div className="container">
			<div class = "row">
					<Cards cardText="The key of this project is to help you understand how to pick the components that you want to build. You have to think about the best way to organize and avoid future errors. What can be re-used? If your code is turning into something big and hard to understand, you will probably need to split it into components: <Jumbotron />, <Navbar />, <Card />." />
					<Cards cardText="That is it! Start coding your first React website. Have fun!🎊" />
					<Cards cardText="Important: Remember to save and upload your code to GitHub by creating a new repository, updating the remote (git remote set-url origin <your new url>), and uploading the code to your new repository using the add, commit and push commands from the git terminal." />
					<Cards cardText="Note: The cards have different content, think DRY (Don't Repeat Yourself) and declare only one <Card /> component, then use props to handle different content." />
			</div>
		</div>
		<Footer />
		</div>
	);
};

export default Home;
