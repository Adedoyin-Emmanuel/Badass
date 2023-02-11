import React from "react";
import db from "../backend/db";
import Button from "./../components/button";
import {navigate} from "./../includes/scripts/script";

const MainApp = (): JSX.Element =>{

    if(!(db.get("BADASS_HOME_PAGE_SEEN") == "true"))
    {
        navigate("/home");
    }
    return (
        <React.Fragment>
                <h2>Hello world, welcome to the main app</h2>

                <Button text="hello world" className="brand-button"></Button>
        </React.Fragment>
    )
}


export default MainApp;