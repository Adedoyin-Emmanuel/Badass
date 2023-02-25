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

	                  <section className="search-content-container my-2 p-1">
	                    <p className="text-capitalize brand-small-text text-light"><span className="brand-text-primary-color text-captitalize fw-bold">bats </span> by josh</p>
	                    <p className="text-capitalize brand-small-text-2 text-light text-muted p-0">*you can preview an image by clicking or tapping on it</p>
	                  </section>
                    <AppFooter childrenSearchActivePage="current-active-page"/>

				</section>

			</React.Suspense>

		</React.Fragment>

	);
}


export default SearchResult;