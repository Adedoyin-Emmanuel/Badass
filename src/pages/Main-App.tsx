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
                        <h4 className="fw-bold text-light">Remove Image <span className="brand-text-primary-color">Background</span></h4>

                        <p className="text-muted">Get a transparent background for any image</p>
                   </section>
               </section>
        </React.Fragment>
    )
}


export default MainApp;