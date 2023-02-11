import React from "react";
import LostImage from "./../assets/images/lost.svg";

const NotFound = (): JSX.Element =>{
	return (
		<React.Fragment>

			<section className="container-fluid ">

				<section className="not-found-container">
					<img src={LostImage} className="img-fluid m-auto"/>
				</section>

			</section>

		</React.Fragment>

	);

}


export default NotFound;