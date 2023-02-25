import React from "react";
import JSZip from "jszip";



const CollectionPack: React.FC = () =>{
	return (

		<React.Fragment>	
				<div className="container mt-5">
				  <div className="card shadow">
				    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
				      <div className="carousel-indicators">
				        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
				        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
				        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				      </div>

				      <div className="carousel-inner shadow-sm">
				        <div className="carousel-item active">
				          <img src="https://via.placeholder.com/800x400?text=Slide+1" className="d-block w-100" alt="Slide 1"/>
				        </div>
				        <div className="carousel-item shadow-sm">
				          <img src="https://via.placeholder.com/800x400?text=Slide+2" className="d-block w-100" alt="Slide 2"/>
				        </div>
				        <div className="carousel-item shadow-sm">
				          <img src="https://via.placeholder.com/800x400?text=Slide+3" className="d-block w-100" alt="Slide 3"/>
				        </div>
				        				    	
				      </div>

				      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
				        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
				        <span className="visually-hidden">Previous</span>
				      </button>
				      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
				        <span className="carousel-control-next-icon" aria-hidden="true"></span>
				        <span className="visually-hidden">Next</span>
				      </button>
				    		<p className="text-capitalize text-center brand-small-text my-2 fw-bold">Bats by Josh</p>
				    		<p className="text-capitalize text-center brand-small-text-2 my-2">75 images</p>
				    </div>

				    <div className="d-flex justify-content-around mt-3 my-2">
				      <button className="btn btn-primary brand-download-image-btn text-light brand-small-text-2 shadow-sm">
						  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
						    <path d="M7.5 1v9.793l-3.646-3.647a.5.5 0 0 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L8.5 10.793V1a.5.5 0 0 0-1 0z"/>
						    <path d="M14.5 13.5v1a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5z"/>
						  </svg> Download
						</button>
				      <button type="button" className="btn btn-secondary brand-small-text-2 text-capitalize text-dark brand-view-image-btn">view images</button>
				    </div>
				  </div>
				</div>
		</React.Fragment>
	);
}


export default CollectionPack;