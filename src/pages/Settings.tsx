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
            
        </React.Fragment>
    )
}

export default Settings;