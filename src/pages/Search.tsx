import React, {Suspense, useState, useEffect, useMemo, useRef} from "react";
import {useNavigate} from "react-router-dom";
import AppHeader from "./../components/app-header";
import AppFooter from "./../components/app-footer";
import Button from "./../components/button";
import * as navigate from "./../includes/scripts/handleNavigation";
import Spinner from "./../components/spinner";
import * as searchAPI from "./../apis/handleImageSearch";
import db from "./../backend/db";
import CollectionPack from "./../components/collection-pack";
import $ from "jquery";
import BackToTop from "./../components/back-to-top";
import Swal from "sweetalert2";

interface CollectionPackProps
{
    title?:string,
    total?: number,
    previewPhotoOne?: string,
    previewPhotoTwo?: string,
    previewPhotoThree?: string,
    user?: string,
    id?: number | string,
    altDescription?: string
}


const Search = () =>{

    const [searchData, setSearchData] = useState<string>("");
    const [dataDonArrive, setDataDonArrive] = useState<boolean>(false);
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [apiReturnedData, setApiReturnedData] = useState<any>();


    const navigateTo = useNavigate();
    let userSearchItem = " ";
    navigate.checkIfHomePageSeen();

    const navigateBack = () =>{
        navigateTo("/app");
    }
    
    const handleFileDownload = (id,total,perPage, title, user) =>{
        searchAPI.handleImageDownload(id, total, perPage, title, user);
    }
    useEffect(()=>{
        const getData =  () =>{ 
            $("#search-form").on("submit", (e: any)=>{
                e.preventDefault();
                setFormSubmitted(true);
                setTimeout(async ()=>{
                    try
                    {
                        let searchResult = await searchAPI.searchImage();
                        db.create("BADASS_TOTAL_SEARCH_IMAGES", searchResult.total);
                        db.create("BADASS_TOTAL_SEARCH_PAGES", searchResult.total_pages);
                        $("#image-search").blur();

                        setApiReturnedData(searchResult.results.map((data:any) =>{
                             return <CollectionPack key={data.id} title={data.title} total={data.total_photos} previewPhotoOne={data.preview_photos[0]?.urls.small} previewPhotoTwo={data.preview_photos[1]?.urls.small} previewPhotoThree={data.preview_photos[2]?.urls.small} user={data.user.username} id={data.id} altDescription={data.cover_photo.alt_description} coverPhotoId={data.cover_photo.id} onDownloadButtonClick={()=>{handleFileDownload(data.id,data.total_photos,30, data.title, data.user.username)}}/>
                        }));

                        let searchItem = db.get("BADASS_SEARCH_ITEM");
                        setDataDonArrive(true);
                        setSearchData(searchItem);
                    }catch(error:any){
                        //console.log(error);
                        if(error.statusText == "error")
                        {
                            Swal.fire({
                                toast:true,
                                text:"An error occured",
                                icon:"error",
                                showConfirmButton:false,
                                timer:2000,
                                position:"top",
                            }).then((willProceed)=>{
                                Swal.fire({
                                    toast:true,
                                    text:"Try again :)",
                                    icon:"info",
                                    showConfirmButton:false,
                                    timer:3000,
                                    position:"top"
                                })
                            });
                        }
                    }
                       
                }, 0);

                setDataDonArrive(false);
                  
            })  
           
        }

        getData();
    }); 

    return (
        <React.Fragment>
            <Suspense fallback={<Spinner/>}>
                    <section className="container-fluid p-0 d-flex flex-column">
                            <AppHeader title="Search Images" backButtonClick={navigateBack}/>
                                <br/>
                                <br/>
                                <br/>
                             <h3 className="fs-4 fw-bold text-start p-2 my-3 text-light text-capitalize mx-md-5">Bulk image downloader</h3>

                            
                             <section className="form-container m-auto width-toggle-7">
                                <form className="d-flex align-items-center justify-content-center p-2" id="search-form" >
                                  
                                        <input type="text" placeholder="search images eg bats, cars, gift" name="searchItem" id="image-search" className="form-control w-100 p-3 shadow brand-small-text-2 search-element" autoComplete={"off"}/>
                                    
                                </form>
                             </section>

                            <section className="search-results-container my-2">
                               {(dataDonArrive) && <p className="text-capitalize brand-small-text mx-2 text-light px-2 text-center">search results for <span className="brand-primary-text fw-bold" id="searchTerm">{searchData}</span> <span className="brand-small-text-2">{db.get("BADASS_TOTAL_SEARCH_IMAGES")} {(parseInt(db.get("BADASS_TOTAL_SEARCH_IMAGES")) > 1) ? "images" : "image" }</span></p>} 
                                
                                {
                                    (!dataDonArrive && formSubmitted) && <section className="d-flex align-items-center justify-content-center m-auto py-4">
                                                                            <section className="dot-windmill"></section>
                                                                         </section>
                                } 
                            </section>

                            <section className="container">
                                <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                                       {(dataDonArrive) && apiReturnedData}
                                        <br/>
                                        <br/>
                                </section>

                            </section>
                            <BackToTop/>
                    </section>
            </Suspense>
        </React.Fragment>
    )
}


export default Search;