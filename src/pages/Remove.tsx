import React, {Suspense, useEffect, useState, useMemo} from "react";
import AppHeader from "./../components/app-header";
import AppFooter from "./../components/app-footer";
import Button from "./../components/button";
import * as navigate from "./../includes/scripts/handleNavigation";
import Spinner from "./../components/spinner";
import jQuery from "jquery";
import {removeUploadedFileBackground} from "./../apis/handleBackgroundRemoval";
import {convertBytesToKb} from "./../includes/scripts/script";
import ConversionCard from "./../components/conversion-card";
import db from "./../backend/db";
import Swal from "sweetalert2";
interface FrontendFileData
{
    lastModified?: number,
    lastModifiedDate?: string,
    name: string,
    size: number,
    type: string
}



const Remove = () =>{

    navigate.checkIfHomePageSeen();
    const [frontendUploadData, setFrontendUploadData] = useState <any>(<React.Fragment></React.Fragment>);
    const [backgroundRemovalStatus, setBackgroundRemovalStatus] = useState <number>(2);

    const getFileDetails = (e: any) =>{

        const files = e.target.files;
        const fileArray = [...files];
        //db.create("BADASS_REMOVE_BG_FILE_STATUS", 2);

        const frontendData = fileArray.map((file: FrontendFileData, fileIndex: number)=>{
            const {lastModified, lastModifiedDate, name : filename, size : filesize, type : filetype} = file;

            if (file.type.startsWith("image/"))
            {
                console.log(lastModified);
                console.log(lastModifiedDate);
                console.log(filename);
                console.log(convertBytesToKb(filesize));
                console.log(filetype);

                return <ConversionCard key = {`${lastModified}${filename}`} fileName = {filename} fileSize = {`${convertBytesToKb(filesize)}Kb`} fileExtension = {filetype} fileConvertStatus = {backgroundRemovalStatus} convertToElement={<React.Fragment></React.Fragment>} />

            }else{
                Swal.fire({
                    toast:true,
                    title:"Only image file are allowed",
                    icon:"info",
                    timer:4000,
                    showConfirmButton: false,
                    position:"top"
                }).then((willProceed)=>{
                        return;
                });

                return;
             }
           
        });

        setFrontendUploadData(frontendData);
    }
    
    useEffect(()=>{
        jQuery(($)=>{
            $.noConflict();

            //removeUploadedFileBackground
            // const backgroundRemovalStatus = removeUploadedFileBackground(remove_bg_file);

            /* if(backgroundRemovalStatus)
            {
                setBackgroundRemovalStatus(1);

                Swal.fire({
                    toast: true,
                    text:"Bakground removed successfully",
                    icon:"success",
                    timer: 4000,
                    showConfirmButton:false
                }).then((willProceed)=>{
                    return;
                });
            }
            */
        })
    });

    return (
        <React.Fragment>
            <Suspense fallback={<Spinner/>}>
                <Spinner/>
                <section className="container-fluid p-0">
                            <AppHeader title="Remove BG"/>
                                <br/>
                                <br/>
                                <br/>
                             <h3 className="fs-4 fw-bold text-start p-2 my-3 text-light">Remove Background</h3>
                             <p className="text-muted text-light text-center">Remove the background of any image</p>

                             <section className="conversion-area" id="conversion-area">

                                 {frontendUploadData}

                            </section>

                             <section className="m-auto d-flex align-items-center justify-content-center">
                                <form className="form w-100 d-flex align-items-center justify-content-center">
                                <div className="brand-white-button brand-button-4 text-center fs-6 my-3">
                                    <label>
                                        <input type="file" className="form-control w-75 width-toggle brand-primary-color" id="remove_bg_file" hidden multiple onChange={getFileDetails}/>  
                                        choose files      
                                    </label>
                                </div>
                                </form>
                             </section>

                            <section className="convert-extension-details">


                            </section>
                             <AppFooter childrenUploadActivePage="current-active-page"/>
                    </section>
            </Suspense>
        </React.Fragment>
    )
}


export default Remove;