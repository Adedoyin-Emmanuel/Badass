import React, {useState, useMemo} from "react";
import jQuery from "jquery";
import Swal from "sweetalert2";
import * as Badass from "./../apis/BADASS_APIKEY";

interface ConvertCardProps
{	
	
	fileIcon?: string,
	fileName?: string,
	fileConvertStatus?: number,
	fileExtension?: string,
	fileSize?: string,
	convertToElement: any

}

const ConversionCard = ({ fileIcon, fileName, fileConvertStatus, fileExtension, fileSize, convertToElement}: ConvertCardProps): JSX.Element =>{

	const [fileClassStatus, setFileClassStatus] = useState("brand-light-color-outline");
	const [fileStatusText, setFileStatusText]   = useState("pending");
	const checkConvertStatus = () =>{

			switch(fileConvertStatus)
	        {
				case 1:
					//file conversion successful
					setFileClassStatus("brand-outline-success");
					setFileStatusText("success");
					break;

				case 0:
					//file conversion failure
					setFileClassStatus("brand-outline-fail");
					setFileStatusText("failure");
					break;

				default:
					setFileClassStatus("brand-light-color-outline");
					setFileStatusText("pending");
					break;
			}

	}


	useMemo(checkConvertStatus, [fileConvertStatus]);

	const trimWord = (word: any) =>{
		return word.replace(/[()\[\]{}\-_=+~!@#$%^&*;:'"<>,.?\\|/`\s]/g, '');
	}

	const returnSubString = (word: any) =>{
		return (word.length > 5 ) ? `${word.substr(0, 10)}` : word;
	}

	const FadeElement = () =>{
		
		const legitFileName = trimWord(fileName);
		jQuery(($) =>{
			$.noConflict();
			
			$(`.${legitFileName}`).addClass("fade-away");
			$(`.${legitFileName}`).on("animationend",(e:any)=>{
				$(`.${legitFileName}`).addClass("d-none");
				
			});

		});
	}

	return (
		<React.Fragment>

			<section className={`conversion-card d-flex align-items-center justify-content-around  my-2 py-1 ${trimWord(fileName)}`}>

				<section className="file-card">
					
						<section className="file-image-container d-flex ">
							<p className="file-name brand-small-text text-muted mx-2 text-capitalize m-0">{`${returnSubString(fileName)}`}</p>

						</section>
						
				</section>

					<section className = {`conversion-status  d-flex align-items-center justify-content-center p-1  rounded-1 ${fileClassStatus}`}>
							<p className="text-light text-muted brand-small-text-2 m-0 text-capitalize">{fileStatusText}</p>
					</section>

					
					{
						convertToElement
					}


					<section className="conversion-size">
							<p className="text-muted text-light brand-small-text-2 text-capitalize m-0">{fileSize} </p>
					</section>

				
					<section className="cancel-icon" onClick={FadeElement} style={{"cursor":"pointer"}}>
						<p className="fs-5 text-light text-muted fw-bold m-0">&#10006;</p>

					</section>


			</section>

		</React.Fragment>

	)
}

export default ConversionCard;