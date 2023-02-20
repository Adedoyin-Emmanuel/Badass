import React, {Suspense, useState, useEffect} from "react";
import jQuery from "jquery";
import AppHeader from "./../components/app-header";
import AppFooter from "./../components/app-footer";
import Button from "./../components/button";
import * as navigate from "./../includes/scripts/handleNavigation";
import {convertBytesToKb} from "./../includes/scripts/script";
import Spinner from "./../components/spinner";
import * as convertAPI from "./../apis/handleConversion";
import ConversionCard from "./../components/conversion-card";
import db from "./../backend/db";
import * as Badass from "./../apis/BADASS_APIKEY";
import Swal from "sweetalert2";

interface FrontendFileData
{
    lastModified?: number,
    lastModifiedDate?: string,
    name: string,
    size: number,
    type: string
}


interface SwalPromiseObject
{
    isConfirmed: boolean,
    //isDismissed?: boolean

}

const Convert = () =>{
    navigate.checkIfHomePageSeen();

    const [conversionUiData, setConversionUIData] = useState<any>(<React.Fragment></React.Fragment>);
    const [convertTo, setConvertTo] = useState("To");


    useEffect(()=>{
        jQuery(($)=>{
            $.noConflict();
            $("#file_uploaded").on("change",(e: any)=>{

                const files = e.target.files;
                const formData = new FormData(), fileArray = [...files];

                fileArray.forEach((file: any, fileIndex: number)=>{
                    formData.append("files[]", files[fileIndex]);
                });


                const checkFileToConvertTo = () =>{
                    Swal.fire({
                        title: "Image Format",
                        text:"hello",
                        html: `
                            <form class="form" id="image_format_form">
                                    <select class="form-control text-center" name="image_format" id="image_format" required>
                                    <option class="option px-2 text-capitalize text-center" value="svg">Svg</option>
                                    <option class="option px-2 text-capitalize text-center" value="png">Png</option>
                                    <option class="option px-2 text-capitalize text-center" value="jpg">Jpg</option>
                                    <option class="option px-2 text-capitalize text-center" value="gif">Gif</option>
                                    <option class="option px-2 text-capitalize text-center" value="jpeg">Jpeg</option>
                            </form>
                        `,
                        confirmButtonColor: "#48cae4"
                    }).then((willProceed: SwalPromiseObject)=>{
                        //console.log(typeof willProceed);
                        if(willProceed.isConfirmed)
                        {
                            const checker = (elem: any) =>{
                                return elem.val().trim();
                            }
                            jQuery(($)=>{
                                $.noConflict();

                                const selectedFormat = checker($("#image_format"));

                                setConvertTo(selectedFormat);

                                //send the data to the backend
                                $.ajax({
                                    url:`http://localhost/badass-backend/api/convert/?app_id=${Badass.API_KEY}&convert_to=${selectedFormat}`,
                                    type: "POST",
                                    processData: false,
                                    contentType: false,
                                    data:formData,
                                    success: (response: any) =>{
                                        console.log(response);
                                    }
                                });
                            })
                        }
                    })
                }


                const testData: JSX.Element[] = fileArray.map((file: FrontendFileData, fileIndex: number)=>{
                    return <ConversionCard key = {`${file.lastModified}${file.name}`} fileName = {file.name} fileSize = {`${convertBytesToKb(file.size)}Kb`} fileExtension = {file.type} fileConvertStatus = {2} convertToClick={checkFileToConvertTo} convertToText={convertTo} />
                });

                setConversionUIData(testData);
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