import React from "react";
import Logo from "./../assets/images/skull.svg";

const Hero = () => {
	return (
		<React.Fragment>
			<section className="hero-section brand-dark-color">
				<div className="row align-items-center g-lg-5 g-md-3 py-5 justify-content-around">
					<div
						className="col-md-6 col-sm-8 col  col-lg-4 d-flex align-items-center m-auto my-md-3 my-4"
						id="img-container">
						<img src={Logo} width="400" height="400" className="img-fluid m-auto"/>
					</div>

					<div className="col-lg-8 text-center text-lg-start my-md-3">
						<h1 className="display-5 fw-bold lh-1 mb-3 text-capitalize text-start text-md-center text-lg-start px-2 px-md-0">
							A free tool for image manipulation
						</h1>
						<p className="col-lg-10 fs-5 p-2 text-start text-lg-start">
							Badass, all the tools for image manipulation in one place.
						</p>

						<button className="btn btn-light btn-lg text-capitalize mx-md-2">
							Get started!
						</button>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Hero;
