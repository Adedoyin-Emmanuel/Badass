import React from "react";
import sayHello from "./../apis/getData";
import Header from "../components/header";
import MainPageFooter from "../components/main-page-footer";
const Home = () => {

	return (
		<React.Fragment>
			<Header/>

			<MainPageFooter/>
		</React.Fragment>
	);
};

export default Home;
