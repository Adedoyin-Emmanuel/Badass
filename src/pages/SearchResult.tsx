import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import * as navigate from "./../includes/scripts/handleNavigation";
import Spinner from "./../components/spinner";
import AppFooter from "./../components/app-footer";
import AppHeader from "./../components/app-header";
import db from "./../backend/db";

const SearchResult = (): JSX.Element =>{
	navigate.checkIfHomePageSeen();

	const navigateTo = useNavigate();
	const {searchItem} = useParams();


	

	const navigatePrevious = () =>{
		navigateTo(-1);

	}
	return (

		<React.Fragment>
			<React.Suspense fallback = {<Spinner/>}>

				 <section className="container-fluid p-0 d-flex flex-column">
                    <AppHeader title="Search Results" backButtonClick={navigatePrevious}/>
	                    <br/>
	                    <br/>
	                    <br/>

	                    <h5>{searchItem}</h5>
                    <AppFooter childrenSearchActivePage="current-active-page"/>

				</section>

			</React.Suspense>

		</React.Fragment>

	);
}


export default SearchResult;