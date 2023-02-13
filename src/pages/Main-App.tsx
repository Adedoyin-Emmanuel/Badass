import React, {Suspense} from "react";
import db from "../backend/db";
import Button from "./../components/button";
import * as navigate from "./../includes/scripts/handleNavigation";
import Header from "./../components/header";
import AppFooter from  "./../components/app-footer";
import DogImage from "./../assets/images/dog1.jpeg";
import LionImage from './../assets/images/lion.jpeg';
import MonkeyImage from "./../assets/images/monkey.jpeg";
import ButterFlyImage from "./../assets/images/butterfly.jpeg";
import Spinner from "./../components/spinner";
import BgImage from "./../assets/images/hero-img-2.png";
const MainApp = (): JSX.Element =>{

    navigate.checkIfHomePageSeen();
    
    return (
            <React.Fragment>
                <Suspense fallback={<Spinner/>}>
                    <Spinner/>
                   <section className="container-fluid p-0">
                       <Header/>
                        <div className="py-5 d-sm-none d-md-block"></div>
                       <section className="remove-bg-container ">
                            <section className="image-container d-flex align-items-center justify-content-center m-auto brand-primary-color rounded-1 py-2 width-toggle " style={{"overflowX":"hidden"}}>
                                <img src={BgImage} width = "400" height = "220" className="bg-image p-1"/>
                            </section>
                            <h4 className="fw-bold text-light fs-4 text-capitalize p-2 my-3">Remove Image <span className="brand-text-primary-color">Background</span></h4>

                            <p className="text-muted brand-small-text p-2">Get a transparent background for any image</p>

                            <section className="m-auto button-container d-flex align-items-center justify-content-center">
                                  <Button className="brand-white-button my-3 width-toggle text-capitalize fw-bold text-dark brand-white-color" text="upload image" onClick={navigate.navigateToUpload}></Button>
                            </section>

                            <p className="text-muted brand-small-text p-2">No image? try one of these</p>
                            <section className="no-image d-flex align-items-center justify-content-center">
                                    <section className="image-box  p-1 brand-white-color rounded-1 mx-2">
                                        <img src={LionImage} width="40" height="30" className="rounded-1"/>
                                    </section>

                                    <section className="image-box  p-1 brand-white-color rounded-1 mx-2">
                                         <img src={MonkeyImage}  width="40" height="30"className="rounded-1"/>
                                    </section>

                                    <section className="image-box  p-1 brand-white-color rounded-1 mx-2">
                                         <img src={ButterFlyImage}  width="40" height="30"className="rounded-1"/>
                                    </section>

                                    <section className="image-box  p-1 brand-white-color rounded-1 mx-2">
                                         <img src={DogImage} width="40" height="30" className="rounded-1"/>
                                    </section>
                            </section>
                       </section>

                       <section className="file-converter-container my-5">
                            <h4 className="fw-bold fs-4 text-capitalize text-white p-2"><span className="brand-text-primary-color">Convert</span> Your Images | Files </h4>

                            <p className="text-muted brand-small-text p-2">With Badass, you can convert your files to any format</p>
                             <section className="m-auto button-container d-flex align-items-center justify-content-center">
                                  <Button className="brand-button-3 my-3 width-toggle text-capitalize fw-bold text-white brand-white-color" text="choose files" onClick={navigate.navigateToConvert}></Button>
                            </section>
                       </section>


                       <section className="bulk-image-downloader-container my-5">
                            <h4 className="fw-bold fs-4 text-capitalize text-white p-2"><span className="brand-text-primary-color">Download</span> Multiple Images At Once </h4>

                            <p className="text-muted brand-small-text p-2">Ever thought of downloading multiple images at once?</p>
                             <section className="m-auto button-container d-flex align-items-center justify-content-center">
                                  <Button className="brand-white-button my-3 width-toggle text-capitalize fw-bold text-dark brand-white-color" text="Download Images" onClick={navigate.navigateToDownload}></Button>
                            </section>
                       </section>
                    <AppFooter/>
                   </section>
                 </Suspense>
            </React.Fragment>
    )
}


export default MainApp;