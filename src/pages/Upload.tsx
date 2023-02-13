import React from "react";
import AppHeader from "./../components/app-header";
import AppFooter from "./../components/app-footer";
import Button from "./../components/button";
import * as navigate from "./../includes/scripts/handleNavigation";

const Upload = () =>{

    navigate.checkIfHomePageSeen();
    return (
        <React.Fragment>
            <section className="container-fluid p-0">
                    <AppHeader title="Remove BG"/>
                        <br/>
                        <br/>
                        <br/>
                     <h3 className="fs-4 fw-bold text-start p-2 my-3 text-light">Remove Background</h3>
                     <p className="text-muted text-light text-center">Remove the background of any image</p>


                     <section className="m-auto d-flex align-items-center justify-content-center">
                        <form className="form w-100 d-flex align-items-center justify-content-center">
                        <div className="brand-white-button text-center fs-6 my-3">
                            <label>
                                <input type="file" className="form-control w-75 width-toggle brand-primary-color" hidden/>  
                                choose files      
                            </label>
                        </div>
                        </form>
                     </section>

                    <section className="convert-extension-details">


                    </section>
                     <AppFooter childrenUploadActivePage="current-active-page"/>
            </section>
        </React.Fragment>
    )
}


export default Upload;