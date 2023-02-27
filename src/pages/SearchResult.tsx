import React, {useState, useEffect} from "react";
import {useNavigate, useParams, useLocation} from "react-router-dom";
import * as navigate from "./../includes/scripts/handleNavigation";
import Spinner from "./../components/spinner";
import AppFooter from "./../components/app-footer";
import AppHeader from "./../components/app-header";
import db from "./../backend/db";
import ImagePreviewCard from "./../components/image-preview-card";
import BackToTop from "./../components/back-to-top";
import * as searchAPI from "./../apis/handleImageSearch";
import Button from "./../components/button";

const SearchResult = (): JSX.Element =>{
	navigate.checkIfHomePageSeen();

	const navigateTo = useNavigate();
	const {searchItem} = useParams();
	const location = useLocation();
	//query string is the total number of images
	const queryString = location.search.substring(1);
	

	const navigatePrevious = () =>{
		navigateTo(-1);
	}

	const [imageTitle, setImageTitle] = useState((): string => db.get("BADASS_IMAGE_TITLE"));
	const [imageUser, setImageUser] = useState((): string => db.get("BADASS_IMAGE_USER"));
	const [dataDonArrive, setDataDonArrive] = useState<boolean>(false);
	const [apiReturnedData, setApiReturnedData] = useState<JSX.Element>();


	const handleDownloadButtonClick = () =>{
		searchAPI.handleImageDownload(searchItem, queryString, 30, imageTitle, imageUser)
	}

	useEffect( ()=>{

		setTimeout(async ()=>{
			const photoResult = await searchAPI.searchImageByCollectionId(searchItem);

			console.log(photoResult);
			setDataDonArrive(true);
			setApiReturnedData(
				photoResult.map((photo: any)=>{
					return <ImagePreviewCard key={photo.id} setImagePreviewSrc={"null"} setBgColor={"blue"} color={photo.color} altDescription={photo.description} src={photo.urls.regular}/>
				})
			);
		})


	},[dataDonArrive]);
	return (

		<React.Fragment>
			<React.Suspense fallback = {<Spinner/>}>

				 <section className="container-fluid p-0 d-flex flex-column">
                    <AppHeader title="Search Results" backButtonClick={navigatePrevious}/>
	                    <br/>
	                    <br/>
	                    <br/>

	                  <section className="search-content-container my-2 p-1">
	                    <p className="text-capitalize brand-small-text text-light"><span className="brand-text-primary-color text-captitalize fw-bold">{imageTitle} </span> by user {imageUser}</p>
	                    <p className="text-capitalize brand-small-text-2 text-light text-muted p-0">*you can preview an image by clicking or tapping on it</p>
	                  </section>
	                   {

		                  	(!dataDonArrive) && <section className="d-flex align-items-center justify-content-center m-auto py-4">
	                                                  <section className="dot-windmill"></section>
	                                            </section>
		               }
	                  <section className="container d-flex align-items-center justify-content-center">

		                 

		                  {
		                  	(dataDonArrive) &&   <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-auto">
							                 		 {apiReturnedData}
	                        					</section>
		                  }
	                        

                     </section>
                     <BackToTop/>

                     <section className=" button-container d-flex align-items-center justify-content-center">
                             <Button className="brand-white-button my-3 width-toggle text-capitalize fw-bold text-dark brand-white-color" text="Download Images" onClick={handleDownloadButtonClick}></Button>
                     </section>

				</section>

			</React.Suspense>

		</React.Fragment>

	);
}


export default SearchResult;