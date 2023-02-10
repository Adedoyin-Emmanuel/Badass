import React from "react";
import Logo from "./../assets/images/skull.svg";

const ConvertHero = () => {
	return (
		<React.Fragment>
			<section className="hero-section brand-dark-color my-3">
				<div className="row align-items-center g-lg-5 g-md-3 py-5 justify-content-around">
					<div
						className="col-md-6 col-sm-8 col  col-lg-4 d-flex align-items-center m-auto my-md-3 my-5"
						id="img-container">
						<img src={Logo} width="400" height="400" className="img-fluid m-auto"/>
					</div>

					<div className="col-lg-8 text-center text-lg-start my-md-3">
						<h1 className="display-5 fw-bold lh-1 mb-3 text-capitalize text-start text-md-center text-lg-start px-2 px-md-0">
							A free tool for image manipulation
						</h1>
						<p className="col-lg-10 fs-5 p-2 text-start text-lg-start">
							Do all with one application, download images, convert images, remove image background.
						</p>

						<button className="btn btn-lg get-started brand-primary-color text-capitalize mx-md-2 my-3">
							Get started!
						</button>

					</div>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319" className="m-0 p-0 wave"><path fill="#fff" fill-opacity="1" d="M0,32L80,80C160,128,320,224,480,224C640,224,800,128,960,112C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

				</div>
			</section>
			
		</React.Fragment>
	);
};

export default ConvertHero;

