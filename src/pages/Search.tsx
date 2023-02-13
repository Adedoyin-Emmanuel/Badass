import React from "react";
import * as navigate from "./../includes/scripts/handleNavigation";

const Search = () =>{

    navigate.checkIfHomePageSeen();
    return (
        <React.Fragment>
            <h3>Search anything!</h3>
        </React.Fragment>
    )
}


export default Search;