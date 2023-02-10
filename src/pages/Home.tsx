import React from "react";
import sayHello from "./../apis/getData";
import Header from "../components/header";


const Home = ()=> {

	return (
		<React.Fragment>
			<section className="brand-dark-color" style={{"overflowX":"hidden"}}>
					<Header/>
			</section>
		</React.Fragment>
	);
};

export default Home;
