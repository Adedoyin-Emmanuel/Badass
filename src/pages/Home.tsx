import React from "react";
import sayHello from "./../apis/getData";
import Header from "../components/header";
import MainPageFooter from "../components/main-page-footer";
import Hero from "../components/hero";
const Home = ()=> {

	return (
		<React.Fragment>
			<Header/>
			<Hero/>
		<div className="brand-primary-color-3">


		</div>
			<MainPageFooter/>
		</React.Fragment>
	);
};

export default Home;
