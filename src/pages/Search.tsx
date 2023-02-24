import React, {Suspense, useState, useEffect, useMemo} from "react";
import AppHeader from "./../components/app-header";
import AppFooter from "./../components/app-footer";
import Button from "./../components/button";
import * as navigate from "./../includes/scripts/handleNavigation";
import Spinner from "./../components/spinner";
import * as searchAPI from "./../apis/handleImageSearch";
import db from "./../backend/db";
import $ from "jquery";
const Search = () =>{

    const [searchData, setSearchData] = useState<string>("");
    const [dataDonArrive, setDataDonArrive] = useState<boolean>(false);
    let userSearchItem = " ";
    navigate.checkIfHomePageSeen();
    
    useEffect(()=>{
        //if(searchAPI.searchImage("search-form"))
        const getData =  () =>{ 
            $("#search-form").on("submit", (e: any)=>{
                e.preventDefault();
                let searchResult = searchAPI.searchImage();
                console.log("seach result is " + searchAPI.searchImage());
                console.log("data don arrive is " + dataDonArrive);
                setDataDonArrive(true);
                setSearchData(searchResult);
                $("#search-image").val("");
            })  
           

        }

        //setSearchData(searchItem);
        getData();
    }); 

   /* useMemo(()=>{

    }, dataDonArrive);*/
    return (
        <React.Fragment>
            <Suspense fallback={<Spinner/>}>
                    <Spinner/>
                    <section className="container-fluid p-0 d-flex flex-column">
                            <AppHeader title="Search Images"/>
                                <br/>
                                <br/>
                                <br/>
                             <h3 className="fs-4 fw-bold text-start p-2 my-3 text-light text-capitalize">Bulk image downloader</h3>
                             <p className="text-muted text-light text-start p-2">Download multiple images at once</p>


                             <section className="m-auto d-flex align-items-center justify-content-center">
                                <form className="form w-100 d-flex align-items-center justify-content-center p-2" id="search-form">
                                    <div>
                                        <input type="text" placeholder="search images eg bats, cars, gift" id="image-search" className="form-control w-100 p-3 shadow brand-small-text search-element"/>
                                    </div>
                                </form>
                             </section>

                            <section className="search-results-container my-3">
                               {(dataDonArrive) && <p className="text-capitalize brand-small-text mx-2 text-light">search result for <span className="brand-primary-text fw-bold">{searchData}</span></p>} 

                                
                                <section className="d-flex align-items-center justify-content-center m-auto py-4">
                                        <section className="dot-windmill"></section>
                                </section>
                            </section>
                             <AppFooter childrenSearchActivePage="current-active-page"/>
                    </section>
            </Suspense>
        </React.Fragment>
    )
}


export default Search;