import React, {Suspense, useState, useEffect} from "react";
import jQuery from "jquery";
import AppHeader from "./../components/app-header";
import AppFooter from "./../components/app-footer";
import Button from "./../components/button";
import * as navigate from "./../includes/scripts/handleNavigation";
import Spinner from "./../components/spinner";
import * as convertAPI from "./../apis/handleConversion";
import ConversionCard from "./../components/conversion-card";
import db from "./../backend/db";
const Convert = () =>{
    navigate.checkIfHomePageSeen();

    const [conversionUiData, setConversionUIData] = useState<JSX.Element>(<React.Fragment></React.Fragment>);

    useEffect(()=>{
        jQuery(($)=>{
            $.noConflict();
            $("#file_uploaded").on("change",(e: any)=>{
                console.log("uploading");
                const files = e.target.files;
                const formData = new FormData(), fileArray = [...files];

                fileArray.forEach((file: string[], fileIndex: number)=>{
                    formData.append("files[]", files[fileIndex]);
                });
                const fetchData = async ()=>{
                    const apiResponse = await convertAPI.connectToBackend(formData);
                    const legitApiResponse = JSON.parse(apiResponse);
                    const returnedData = legitApiResponse.map((data: convertAPI.ConvertJSONResponse, index: number)=>{
                            const {filename, extension, filesize, id} = data;   
                            return <ConversionCard key = {id} fileName = {filename} fileSize = {`${filesize}Kb`} fileExtension = {extension} fileConvertStatus = {2} />
                    })
                    setConversionUIData(returnedData);
                }
                fetchData();

            });
        });

       
    }, []);
    return (
        <React.Fragment>
            <section className="container-fluid p-0">
                    <AppHeader title="Convert"/>
                        <br/>
                        <br/>
                        <br/>
                     <h3 className="fs-4 fw-bold text-start p-2 my-3 text-light">Image Converter</h3>
                     <p className="text-muted text-light text-start p-2">Convert your images files to any format</p>

                     <section className="conversion-area" id="conversion-area">

                        {conversionUiData}

                     </section>

                     <section className="m-auto d-flex align-items-center justify-content-center">
                        <form className="form w-100 d-flex align-items-center justify-content-center" id="conversion_form" encType="multipart/form-data">
                        <div className="brand-button-3 brand-button-4 text-center fs-6 my-3">
                            <label>
                                <input type="file" id="file_uploaded" name="files" className="form-control w-75 width-toggle brand-primary-color"  hidden multiple/>  
                                choose image      
                            </label>
                        </div>
                        </form>
                     </section>

                    <section className="convert-extension-details">
                    </section>
                     <AppFooter childrenConvertActivePage="current-active-page"/>
            </section>
        </React.Fragment>
    )
}


export default Convert;