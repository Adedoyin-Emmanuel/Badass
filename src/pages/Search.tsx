import React, {Suspense, useState, useEffect} from "react";
import AppHeader from "./../components/app-header";
import AppFooter from "./../components/app-footer";
import Button from "./../components/button";
import * as navigate from "./../includes/scripts/handleNavigation";
import Spinner from "./../components/spinner";
import * as searchAPI from "./../apis/handleImageSearch";
const Search = () =>{

    navigate.checkIfHomePageSeen();
    
    useEffect(()=>{
        searchAPI.searchImage("search-form");

    });    
    return (
        <React.Fragment>
            <Suspense fallback={<Spinner/>}>
                    <Spinner/>
                    <section className="container-fluid p-0">
                            <AppHeader title="Search Images"/>
                                <br/>
                                <br/>
                                <br/>
                             <h3 className="fs-4 fw-bold text-start p-2 my-3 text-light text-capitalize">Bulk image downloader</h3>
                             <p className="text-muted text-light text-start p-2">Download multiple images at once</p>


                             <section className="m-auto d-flex align-items-center justify-content-center">
                                <form className="form w-100 d-flex align-items-center justify-content-center" id="search-form">
                                    <div>
                                        <input type="search" placeholder="search images eg home, book, gift" id="image-search" className="form-control w-100 p-3 shadow brand-small-text search-element"/>
                                    </div>
                                </form>
                             </section>

                            <section className="convert-extension-details">


                            </section>
                             <AppFooter childrenSearchActivePage="current-active-page"/>
                    </section>
            </Suspense>
        </React.Fragment>
    )
}


export default Search;