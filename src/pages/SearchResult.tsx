import React from "react";
import Spinner from "./../components/spinner";
import AppFooter from "./../components/app-footer";
import AppHeader from "./../components/app-header";
const SearchResult = (): JSX.Element =>{


	const test = () =>{
		console.log("hah i am defined");
	}
	return (

		<React.Fragment>
			<React.Suspense fallback = {<Spinner/>}>

				 <section className="container-fluid p-0 d-flex flex-column">
                    <AppHeader title="Search Results" backButtonClick={test}/>
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