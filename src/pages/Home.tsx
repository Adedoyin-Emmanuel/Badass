import React from "react";
import sayHello from "./../apis/getData";
import Header from "../components/header";
import Hero from "../components/hero";

const Home = ()=> {

	return (
		<React.Fragment>
			<section className="brand-dark-color" style={{"overflowX":"hidden"}}>
					<Header/>
					<Hero/>
			</section>
		</React.Fragment>
	);
};

export default Home;
