import React, {Suspense, useEffect, useState, useMemo} from "react";
import AppHeader from "./../components/app-header";
import AppFooter from "./../components/app-footer";
import Button from "./../components/button";
import * as navigate from "./../includes/scripts/handleNavigation";
import Spinner from "./../components/spinner";
import jQuery from "jquery";
import {removeUploadedFileBackground} from "./../apis/handleBackgroundRemoval";
import {convertBytesToKb, isImage} from "./../includes/scripts/script";
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
    const [validFile, setValidFile] = useState<boolean>(false);
    const [removeBgFileStatus, setRemoveBgFileStatus] = useState<number>(2);
    let frontendDataDuplicate: JSX.Element = <React.Fragment></React.Fragment>;

    const getFileDetails = (e: any) =>{

    }
    
    useEffect(()=>{
        jQuery(($)=>{
            $.noConflict();

            //removeUploadedFileBackground
                $("#remove_bg_file").on("change",(e: any)=>{

                    const files = e.target.files;
                    const fileArray = [...files], formData = new FormData();

                    db.create("BADASS_REMOVE_BG_FILE_STATUS", "1");

                    const frontendData = fileArray.map((file: FrontendFileData, fileIndex: number)=>{
                        const {lastModified, lastModifiedDate, name : filename, size : filesize, type : filetype} = file;

                           if (isImage(files[fileIndex]))
                            {
                                setValidFile(true);
                                db.create("BADASS_REMOVE_BG_VALID_FILE", "true");

                            }else{
                                setValidFile(false);
                                db.create("BADASS_REMOVE_BG_VALID_FILE", "false");

                                Swal.fire({
                                    toast:true,
                                    text:"Only image files are allowed",
                                    icon:"info",
                                    timer:4000,
                                    showConfirmButton: false,
                                    position:"top",
                                }).then((willProceed)=>{
                                    return;
                                });

                                return;
                           }
                         
                        return <ConversionCard key = {`${lastModified}${filename}`} fileName = {filename} fileSize = {`${convertBytesToKb(filesize)}Kb`} fileExtension = {filetype} fileConvertStatus = {parseInt(db.get("BADASS_REMOVE_BG_FILE_STATUS"))} convertToElement={<React.Fragment></React.Fragment>} />;
            });

                    setFrontendUploadData(frontendData);

                    fileArray.forEach((file:FrontendFileData, fileIndex:number)=>{
                        formData.append("image_file", files[fileIndex]);
                        const backgroundRemovalStatus = removeUploadedFileBackground(formData, files[fileIndex].filename);

                        (backgroundRemovalStatus) ?  db.update("BADASS_REMOVE_BG_FILE_STATUS", "1"):  db.update("BADASS_REMOVE_BG_FILE_STATUS", "0");

                        setFrontendUploadData(frontendData);
                       
                    });
                });
            });
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

                                
                                {(validFile && db.get("BADASS_REMOVE_BG_VALID_FILE") === "true") ? frontendUploadData : <React.Fragment></React.Fragment>}
                            </section>

                             <section className="m-auto d-flex align-items-center justify-content-center">
                                <form className="form w-100 d-flex align-items-center justify-content-center">
                                <div className="brand-white-button brand-button-4 text-center fs-6 my-3">
                                    <label>
                                        <input type="file" className="form-control w-75 width-toggle brand-primary-color" id="remove_bg_file" hidden multiple onChange={e => getFileDetails(e)}/>  
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