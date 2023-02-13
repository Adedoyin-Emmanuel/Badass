import React from "react";
import db from "./../backend/db";
import * as navigate from "./../includes/scripts/handleNavigation";

const Settings = (): JSX.Element =>{
    
    navigate.checkIfHomePageSeen();
    return (
        <React.Fragment>
            <h3>Welcome to the settings page!</h3>
        </React.Fragment>
    )
}

export default Settings;