import React from "react";
import sayHello from "./../apis/getData";
import Header from "../components/header";
import MainPageFooter from "../components/main-page-footer";

const Home = ()=> {

	return (
		<React.Fragment>
			<Header/>
			<br/>
			<br/>
			<br/>
		<div className="brand-primary-color-3">


		<div className="box p-4" >
		i am emmysoft
		</div>

		</div>
			<MainPageFooter/>
		</React.Fragment>
	);
};

export default Home;
