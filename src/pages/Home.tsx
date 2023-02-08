import React from "react";
import sayHello from "./../apis/getData";
const Home = () => {
	sayHello();
	
	return (
		<React.Fragment>
			<h2>This is the home component</h2>

			<div className="bg-dark">
			<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="52" height="52"/>
			</div>
		</React.Fragment>
	);
};

export default Home;
