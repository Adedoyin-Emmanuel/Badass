import React from "react";
import AppHeader from "./../components/app-header";
import AppFooter from "./../components/app-footer";

const Convert = () =>{
    return (
        <React.Fragment>
            <section className="container-fluid p-0">
                    <AppHeader title="Convert"/>
                        <br/>
                        <br/>
                        <br/>
                     <h2>This is the convert component</h2>

                     <AppFooter/>
            </section>
        </React.Fragment>
    )
}


export default Convert;