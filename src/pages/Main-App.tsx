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
                   

                    hi world.
               </section>
        </React.Fragment>
    )
}


export default MainApp;