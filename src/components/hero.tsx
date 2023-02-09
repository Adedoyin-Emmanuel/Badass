import React from "react";
import Logo from "./../assets/images/skull.svg";

const Hero = () => {
	return (
		<React.Fragment>
			<section className="hero-section brand-dark-color">
				<div className="row align-items-center g-lg-5 g-md-3 py-5 justify-content-around">
					<div
						className="col-md-6 col-sm-8 col mx-auto col-lg-5 d-flex align-items-center m-auto my-md-3 my-4"
						id="img-container">
						<img src={Logo} width="400" height="400"/>
					</div>

					<div className="col-lg-7 text-center text-lg-start my-md-3">
						<h1 className="display-5 fw-bold lh-1 mb-3 text-capitalize text-start text-md-center text-lg-start px-2 px-md-0">
							Hi, i am emmanuel
						</h1>
						<p className="col-lg-10 fs-5 p-2 text-start text-lg-start">
							I am a passion oriented fullstack developer
						</p>

						<button className="btn btn-light btn-lg text-capitalize mx-md-2">
							contact me
						</button>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Hero;
