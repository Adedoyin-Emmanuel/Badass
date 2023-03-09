import React, {Suspense, useState, useEffect} from "react";
import jQuery from "jquery";
import AppHeader from "./../components/app-header";
import AppFooter from "./../components/app-footer";
import Button from "./../components/button";
import * as navigate from "./../includes/scripts/handleNavigation";
import {convertBytesToKb, isImage, getFileExtensionFromMimeType} from "./../includes/scripts/script";
import Spinner from "./../components/spinner";
import * as convertAPI from "./../apis/handleConversion";
import ConversionCard from "./../components/conversion-card";
import db from "./../backend/db";
import * as Badass from "./../apis/BADASS_APIKEY";
import Swal from "sweetalert2";
import ConvertTo from "./../components/convertTo";

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
    const [fileConvertStatus, setConvertStatus] = useState(2);
    const [fileDetails, setFileDetails] = useState<convertAPI.ConvertJSONResponse>();
    const [validFile, setValidFile] = useState<boolean>(false);


    const trimWord = (word: any) =>{
        return word.replace(/[()\[\]{}\-_=+~!@#$%^&*;:'"<>,.?\\|/`\s]/g, '');
    }

    useEffect(()=>{
        jQuery(($)=>{
            $.noConflict();
            $("#file_uploaded").on("change",(e: any)=>{
                db.create("BADASS_CONVERSION_STATUS", "2");
                const files = e.target.files;
                const formData = new FormData(), fileArray = [...files];

                if (!navigator.onLine) 
                {
                Swal.fire({
                    toast:true,
                    timer:4000,
                    text:"No internet connection",
                    icon:"error",
                    showConfirmButton:false,
                    position:"top"
                });

                return false;
                }


                fileArray.forEach((file: any, fileIndex: number)=>{
                    if (isImage(files[fileIndex]))
                    {
                        formData.append("files[]", files[fileIndex]);
                        db.create(`BADASS_CONVERT_TOTAL_FILES_UPLOADED`, files.length);
                        setValidFile(true);
                        db.create("BADASS_VALID_FILE", "true");

                    }else
                    {
                        setValidFile(false);
                        db.create("BADASS_VALID_FILE", "false");

                        Swal.fire({
                            toast:true,
                            text:"Only image files are allowed",
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

                const checkFileToConvertTo = () =>{
                    Swal.fire({
                        title: "Image Format",
                        html: `
                            <form class="form" id="image_format_form">
                                    <select class="form-control text-center" name="image_format" id="image_format" required>
                                    <option class="option px-2 text-capitalize text-center" value="svg">Svg</option>
                                    <option class="option px-2 text-capitalize text-center" value="png">Png</option>
                                    <option class="option px-2 text-capitalize text-center" value="jpg">Jpg</option>
                                    <option class="option px-2 text-capitalize text-center" value="ico">Ico</option>
                                    <option class="option px-2 text-capitalize text-center" value="jpeg">Jpeg</option>
                            </form>
                        `,
                        confirmButtonColor: "#48cae4"
                    }).then((willProceed: SwalPromiseObject)=>{
                        if(willProceed.isConfirmed)
                        {
                            const trimSelectedOption = (elem: any) =>{
                                return elem.val().trim();
                            }
                            jQuery(($)=>{
                                $.noConflict();

                                const selectedFormat = trimSelectedOption($("#image_format"));
                                const fetchData = async () =>{
                                    try{
                                            const response = await convertAPI.connectToBackend(formData, selectedFormat);
                                     
                                            const legitResponse = await JSON.parse(response);
                                            setValidFile(true);

                                            Swal.fire({
                                                toast:true,
                                                text:"Conversion successful",
                                                icon:"success",
                                                timer:2000,
                                                showConfirmButton:false,
                                                position:"top"
                                            }).then((willProceed)=>{
                                                Swal.fire({
                                                    toast:true,
                                                    text:"Download starting soon",
                                                    showConfirmButton:false,
                                                    icon:"info",
                                                    position:"top",
                                                    timer:4000
                                                });
                                            })

                                            legitResponse.forEach((data: convertAPI.ConvertJSONResponse, dataIndex: number)=>{
                                                const {id, filename, extension, filesize, converting_to : convertingTo, convert_status : convertStatus, message, image_data : imageData} = data;
                                                setFileDetails(data);
                                                db.update("BADASS_CONVERSION_STATUS", "1");
                                                setConversionUIData(updateFrontend(selectedFormat));
                                                const decodedImageData = atob(imageData);
                                                const arrayBuffer = new ArrayBuffer(decodedImageData.length);
                                                const uintArray = new Uint8Array(arrayBuffer);
                                                for (let i = 0; i < decodedImageData.length; i++) {
                                                  uintArray[i] = decodedImageData.charCodeAt(i);
                                                }
                                                const blob = new Blob([arrayBuffer], { type: `image/${convertingTo}` }); // Create blob from array buffer
                                                const url = URL.createObjectURL(blob); // Create object URL from blob
                                                const link = document.createElement('a');
                                                link.href = url;
                                                link.download = `${filename}_converted.${convertingTo}`;
                                                link.click();

                                                
                                        });
                                    }catch(error:any)
                                    {

                                        console.log(error);
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
                                }
                                fetchData();
                            })
                        }
                    })
                }

                const updateFrontend = (convertToArg: string = "To") =>{
                    const conversionCardContent: JSX.Element[] = fileArray.map((file: FrontendFileData, fileIndex: number)=>{
                        const userConvertType = () => checkFileToConvertTo();
                        const convertToLegitElement = <ConvertTo convertToText={convertToArg} convertToClick={userConvertType}/>
                        return <ConversionCard key = {`${file.lastModified}${file.name}`} fileName = {`${trimWord(file.name)}`} fileSize = {`${convertBytesToKb(file.size)}Kb`} fileExtension = {getFileExtensionFromMimeType(file.type)} fileConvertStatus = {parseInt(db.get("BADASS_CONVERSION_STATUS"))} convertToElement={convertToLegitElement} />;
                        
                    });

                    return conversionCardContent;
                }

                setConversionUIData(updateFrontend());
            });
        });
    });
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

                        {(validFile === true && db.get("BADASS_VALID_FILE") === "true") ? conversionUiData : <React.Fragment></React.Fragment>}

                     </section>

                     <section className="m-auto d-flex align-items-center justify-content-center">
                        <form className="form w-100 d-flex align-items-center justify-content-center" id="conversion_form" encType="multipart/form-data">
                        <div className="brand-button-3 width-toggle brand-button-4 text-center fs-6 my-4">
                            <label>
                                <input type="file" id="file_uploaded" name="files" className="form-control w-75 width-toggle brand-primary-color"  hidden multiple/>  
                                choose image      
                            </label>
                        </div>
                        </form>
                     </section>

                    <section className="convert-extension-details">
                        <section className="">
                        </section>
                    </section>
                     <AppFooter childrenConvertActivePage="current-active-page"/>
            </section>
        </React.Fragment>
    )
}


export default Convert;