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
                     <h3 className="fs-4 fw-bold text-center my-3 text-light">File Converter</h3>
                     <p className="text-muted text-light text-center">Convert your files to any format</p>
                     <AppFooter childrenConvertActivePage="current-active-page"/>
            </section>
        </React.Fragment>
    )
}


export default Convert;