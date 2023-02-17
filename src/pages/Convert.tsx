import React, {Suspense} from "react";
import AppHeader from "./../components/app-header";
import AppFooter from "./../components/app-footer";
import Button from "./../components/button";
import * as navigate from "./../includes/scripts/handleNavigation";
import Spinner from "./../components/spinner";
import * as convertAPI from "./../apis/handleConversion";
const Convert = () =>{

    navigate.checkIfHomePageSeen();
    return (
        <React.Fragment>
            <section className="container-fluid p-0">
                    <AppHeader title="Convert"/>
                        <br/>
                        <br/>
                        <br/>
                     <h3 className="fs-4 fw-bold text-start p-2 my-3 text-light">File | Image Converter</h3>
                     <p className="text-muted text-light text-start p-2">Convert your files to any format</p>


                     <section className="m-auto d-flex align-items-center justify-content-center">
                        <form className="form w-100 d-flex align-items-center justify-content-center" id="conversion_form" encType="multipart/form-data">
                        <div className="brand-button-3 brand-button-4 text-center fs-6 my-3">
                            <label>
                                <input type="file" id="file_uploaded" name="files" className="form-control w-75 width-toggle brand-primary-color" hidden multiple onChange={(e)=> convertAPI.checkSubmit(e)}/>  
                                choose files      
                            </label>
                        </div>
                        </form>
                     </section>

                    <section className="convert-extension-details">


                    </section>
                     <AppFooter childrenConvertActivePage="current-active-page"/>
            </section>
        </React.Fragment>
    )
}


export default Convert;