import React from "react";
import LostImage from "./../assets/images/lost.svg";
import Button from "./../components/button";
import {navigate} from "./../includes/scripts/script";
const NotFound = (): JSX.Element =>{

	const navigateToHome = ():void =>{
		navigate("/app");
	}
	return (
		<React.Fragment>

			<section className="container-fluid my-3 ">
				<section className="d-flex align-items-center justify-content-center">
					<h1 className="fs-1 fw-bold text-light text-capitalize my-2 p-2">Not found!</h1>
				</section>

				<section className="not-found-container d-flex align-items-center justify-content-center my-md-0 my-3">
					<img src={LostImage} className="img-fluid m-auto lost-image p-4" width="400" height="400"/>
				</section>

				 <section className="m-auto button-container d-flex align-items-center justify-content-center my-sm-3">
                              <Button className="brand-button-3 my-3 width-toggle-6 text-capitalize fw-bold text-dark brand-white-color" text="Go Home" onClick={navigateToHome}/>
                 </section>
			</section>

		</React.Fragment>

	);

}


export default NotFound;