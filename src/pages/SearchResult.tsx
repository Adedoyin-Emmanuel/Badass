import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import * as navigate from "./../includes/scripts/handleNavigation";
import Spinner from "./../components/spinner";
import AppFooter from "./../components/app-footer";
import AppHeader from "./../components/app-header";
import db from "./../backend/db";
import ImagePreviewCard from "./../components/image-preview-card";
import * as searchAPI from "./../apis/handleImageSearch";

const SearchResult = (): JSX.Element =>{
	navigate.checkIfHomePageSeen();

	const navigateTo = useNavigate();
	const {searchItem} = useParams();

	const navigatePrevious = () =>{
		navigateTo(-1);
	}

	const [imageTitle, setImageTitle] = useState((): string => db.get("BADASS_IMAGE_TITLE"));
	const [imageUser, setImageUser] = useState((): string => db.get("BADASS_IMAGE_USER"));
	const [dataDonArrive, setDataDonArrive] = useState<boolean>(false);
	const [apiReturnedData, setApiReturnedData] = useState();


	useEffect( ()=>{

		setTimeout(async ()=>{
			const photoResult = await searchAPI.searchImageByCollectionId(searchItem);

			console.log(photoResult);
			setDataDonArrive(true);
			setApiReturnedData(
				photoResult.map((photo: any)=>{
					return <ImagePreviewCard key={photo.id} setImagePreviewSrc={"null"} setBgColor={"blue"} color={photo.color} altDescription={photo.description} src={photo.urls.regular}/>
				})
			)
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
	                  <section className="container">

	                  {

	                  	(!dataDonArrive) && <section className="d-flex align-items-center justify-content-center m-auto py-4">
                                                  <section className="dot-windmill"></section>
                                            </section>
	                  }

	                  {
	                  	(dataDonArrive) && <section className="d-flex flex-md-row flex-column align-items-center justify-content-around">
						                 		 <ImagePreviewCard/>
						                 		 <ImagePreviewCard/>
						                 		 <ImagePreviewCard/>
                        					</section>
	                  }
                        

                     </section>
                    <AppFooter childrenSearchActivePage="current-active-page"/>

				</section>

			</React.Suspense>

		</React.Fragment>

	);
}


export default SearchResult;