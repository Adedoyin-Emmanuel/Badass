import React from "react";
import {useNavigate} from "react-router-dom";
import * as navigate from "./../includes/scripts/handleNavigation";
import Spinner from "./../components/spinner";
import AppFooter from "./../components/app-footer";
import AppHeader from "./../components/app-header";
import db from "./../backend/db";

const SearchResult = (): JSX.Element =>{
	navigate.checkIfHomePageSeen();

	const navigateTo = useNavigate();

	const navigatePrevious = () =>{
		navigateTo("/app/search/");

	}
	return (

		<React.Fragment>
			<React.Suspense fallback = {<Spinner/>}>

				 <section className="container-fluid p-0 d-flex flex-column">
                    <AppHeader title="Search Results" backButtonClick={navigatePrevious}/>
	                    <br/>
	                    <br/>
	                    <br/>

					<h4>Hello world, you wan collect</h4>
                    <AppFooter childrenSearchActivePage="current-active-page"/>

				</section>

			</React.Suspense>


		</React.Fragment>

	)
}


export default SearchResult;