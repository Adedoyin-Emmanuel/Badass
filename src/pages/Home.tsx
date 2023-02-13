import React, {Suspense} from "react";
import sayHello from "./../apis/getData";
import Header from "../components/header";
import Hero from "../components/hero";
import * as navigate from "./../includes/scripts/handleNavigation";
import db from "./../backend/db";
import Spinner from "./../components/spinner";

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
