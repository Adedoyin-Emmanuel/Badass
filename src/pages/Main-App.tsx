import React from "react";
import db from "../backend/db";
import Button from "./../components/button";
import {navigate} from "./../includes/scripts/script";
import Header from "./../components/header";

const MainApp = (): JSX.Element =>{

    if(!(db.get("BADASS_HOME_PAGE_SEEN") == "true"))
    {
        navigate("/home");
    }
    return (
        <React.Fragment>
               <section className="container-fluid">
                   <Header/>
                    <div className="py-5 d-sm-none d-md-block"></div>
                   <section className="remove-bg-container ">
                        <h4 className="fw-bold text-light fs-4 text-capitalize">Remove Image <span className="brand-text-primary-color">Background</span></h4>

                        <p className="text-muted brand-small-text">Get a transparent background for any image</p>

                        <section className="m-auto button-container d-flex align-items-center justify-content-center">
                              <Button className="brand-button-3 my-3 width-toggle text-capitalize fw-bold text-light" text="upload image"></Button>
                        </section>

                        <p className="text-muted brand-small-text">No image? try one of these</p>
                        <section className="no-image d-flex align-items-center justify-content-center">
                                <section className="image-box p-3 brand-white-color rounded-1 mx-2"></section>

                                <section className="image-box p-3 brand-white-color rounded-1 mx-2"></section>

                                <section className="image-box p-3 brand-white-color rounded-1 mx-2"></section>

                                <section className="image-box p-3 brand-white-color rounded-1 mx-2"></section>
                        </section>
                   </section>

                   <section className="file-converter-container my-5">
                        <h4 className="fw-bold fs-4 text-capitalize text-white"><span className="brand-text-primary-color">Convert</span> Your Images | Files </h4>

                        <p className="text-muted brand-small-text">with Badass, you can convert your files to any format</p>
                         <section className="m-auto button-container d-flex align-items-center justify-content-center">
                              <Button className="brand-white-button my-3 width-toggle text-capitalize fw-bold text-dark brand-white-color" text="choose files"></Button>
                        </section>
                   </section>


                   <section className="bulk-image-downloader-container my-5">
                        <h4 className="fw-bold fs-4 text-capitalize text-white"><span className="brand-text-primary-color">Download</span> Multiple Images At Once </h4>

                        <p className="text-muted brand-small-text">with Badass, you can convert your files to any format</p>
                         <section className="m-auto button-container d-flex align-items-center justify-content-center">
                              <Button className="brand-white-button my-3 width-toggle text-capitalize fw-bold text-dark brand-white-color" text="choose files"></Button>
                        </section>
                   </section>

               </section>
        </React.Fragment>
    )
}


export default MainApp;