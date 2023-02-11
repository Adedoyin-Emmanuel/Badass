import React from "react";
import sayHello from "./../apis/getData";
import Header from "../components/header";
import Hero from "../components/hero";
import {navigate} from "./../includes/scripts/script";
import db from "./../backend/db";
const Home = ()=> {
	if(db.get("BADASS_HOME_PAGE_SEEN") == "true")
    {
        navigate("/app");
    }
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
