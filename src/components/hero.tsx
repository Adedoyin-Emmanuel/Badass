import React from "react";
import Logo from "./../assets/images/skull.svg";
import Button from  "./button";
const Hero = () => {
	return (
		<React.Fragment>
			<section className="hero-section brand-dark-color">
				<div className="py-5 d-sm-none d-md-block"></div>

				<div className="row align-items-center g-lg-5 g-md-3 py-2 justify-content-around">
					<div
						className="col-md-6 col-sm-8 col  col-lg-4 d-flex align-items-center m-auto my-md-3 my-5"
						id="img-container">
						<img
							src={Logo}
							width="400"
							height="400"
							className="img-fluid m-auto"
						/>
					</div>

					<div className="col-lg-8 text-center text-lg-start my-md-3">
						<h1 className="display-5 fw-bold lh-1 mb-3 text-capitalize text-start text-md-center text-lg-start px-2 px-md-0">
							A free tool for image manipulation
						</h1>

						<p className="col-lg-10 fs-5 p-2 text-start text-lg-start">
							Do all with one application download, convert and remove
							background images.
						</p>
						<Button text="get started" className="brand-primary-color-2"></Button>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Hero;
