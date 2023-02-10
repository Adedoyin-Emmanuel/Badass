import React from "react";
import Convert from "./../assets/images/convert.svg";

const ConvertHero = () => {
	return (
		<React.Fragment>
			<section className="hero-section brand-dark-color">

				<div className="row align-items-center g-lg-5 g-md-3 py-5 justify-content-around">
					<div
						className="col-md-6 col-sm-8 col  col-lg-4 d-flex align-items-center m-auto my-md-3 my-2 p-2"
						id="img-container">
						<img src={Convert} width="300" height="300" className="img-fluid m-auto"/>
					</div>

					<div className="col-lg-8 text-center text-lg-start my-md-3">
						<h1 className="display-5 fw-bold lh-1 mb-3 text-capitalize text-start text-md-center text-lg-start px-2 px-md-0">
							Convert Images with badass
						</h1>
						<p className="col-lg-10 fs-5 p-2 text-start text-lg-start">
							Convert your images from one format to another. png, ico, jpg, jpeg etc.
						</p>
					</div>
				</div>
			</section>
			
		</React.Fragment>
	);
};

export default ConvertHero;

