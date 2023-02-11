import React from "react";
import db from "./../backend/db";
import { navigate } from '../includes/scripts/script';

const Settings = (): JSX.Element =>{
    if(!(db.get("BADASS_HOME_PAGE_SEEN") === "true"))
    {
        navigate("/home");
    }
    
    return (
        <React.Fragment>
            <h3>Welcome to the settings page!</h3>
        </React.Fragment>
    )
}

export default Settings;