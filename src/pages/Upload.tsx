import React from "react";
import * as navigate from "./../includes/scripts/handleNavigation";
const Upload = () =>{

    navigate.checkIfHomePageSeen();
    return (
        <React.Fragment>
            <h3>Hello, comrade upload a legit file!</h3>
        </React.Fragment>
    )
}


export default Upload;