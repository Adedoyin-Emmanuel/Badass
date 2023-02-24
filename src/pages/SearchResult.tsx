import React from "react";
import Spinner from "./../components/spinner";


const SearchResult = (): JSX.Element =>{
	return (

		<React.Fragment>
			<React.Suspense fallback = {<Spinner/>}>

				<section className="container-fluid">

					<h4>Hello world, you wan collect</h4>

				</section>

			</React.Suspense>


		</React.Fragment>

	)
}