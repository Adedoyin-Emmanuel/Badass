import React, {useState, useMemo} from "react";

interface ConvertCardProps
{
	fileIcon?: string,
	fileName?: string,
	fileConvertStatus?: string | number,
	fileExtension?: string,
	fileSize?: string,

}




const ConversionCard = ({fileIcon, fileName, fileConvertStatus, fileExtension, fileSize}: ConvertCardProps): JSX.Element =>{

	const [fileClassStatus, setFileClassStatus] = useState("brand-light-color-outline");
	const [fileStatusText, setFileStatusText]   = useState("pending");

	const checkConvertStatus = () =>{

			switch(fileConvertStatus)
	        {
				case 1:
					//file conversion successful
					setFileClassStatus("brand-outline-success");
					setFileStatusText("finished");
					break;

				case 0:
					//file conversion failure
					setFileClassStatus("brand-outline-fail");
					setFileStatusText("fail");
					break;

				default:
					setFileClassStatus("brand-light-color-outline");
					setFileStatusText("pending");
					break;
			}

	}



	useMemo(checkConvertStatus, [])

	return (
		<React.Fragment>

			<section className="conversion-card d-flex align-items-center justify-content-around  my-3 py-2">

				<section className="file-card">
					
						<section className="file-image-container d-flex ">
							{/*file icon depending on type of file*/}
							<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
							 width="20" height="20" viewBox="0 0 124.000000 124.000000"
							 preserveAspectRatio="xMidYMid meet">

							<g transform="translate(0.000000,124.000000) scale(0.100000,-0.100000)"
							fill="#fff" stroke="none">
							<path d="M71 1112 c-71 -38 -71 -39 -71 -492 0 -453 0 -454 71 -492 31 -17 69
							-18 549 -18 480 0 518 1 549 18 71 38 71 39 71 492 0 453 0 454 -71 492 -31
							17 -69 18 -549 18 -480 0 -518 -1 -549 -18z m1090 -61 l29 -29 0 -201 c0 -111
							-3 -201 -7 -201 -3 0 -39 32 -79 70 -39 39 -78 70 -84 70 -12 0 -305 -279
							-323 -307 -15 -23 -30 -14 -118 72 -47 47 -95 85 -105 85 -23 0 -178 -154
							-172 -172 11 -32 42 -18 109 48 l69 68 75 -74 c41 -41 75 -78 75 -82 0 -5 -25
							-34 -55 -64 -30 -31 -55 -60 -55 -64 0 -4 7 -13 15 -20 14 -11 49 20 250 221
							l235 233 85 -84 85 -85 0 -158 0 -159 -29 -29 -29 -29 -512 0 -512 0 -29 29
							-29 29 0 402 0 402 29 29 29 29 512 0 512 0 29 -29z"/>
							<path d="M230 948 c-73 -48 -87 -134 -34 -198 97 -114 285 6 220 141 -36 73
							-123 100 -186 57z m121 -57 c34 -34 37 -68 9 -104 -26 -33 -63 -41 -99 -23
							-55 29 -60 105 -9 140 34 24 66 19 99 -13z"/>
							<path d="M225 380 c-21 -23 -13 -50 14 -50 23 0 56 43 46 60 -10 16 -40 12
							-60 -10z"/>
							</g>
							</svg>
							<p className="file-name brand-small-text text-muted mx-2 text-capitalize m-0">{fileName}</p>

						</section>
						
				</section>

					<section className = {`conversion-status  d-flex align-items-center justify-content-center p-1 rounded-1 ${fileClassStatus}`}>
							<p className="text-light text-muted brand-small-text-2 m-0 text-capitalize">{fileClassStatus}</p>
					</section>


					<section className="conversion-size">
							<p className="text-muted text-light brand-small-text text-capitalize m-0"> {fileExtension} / {fileSize} </p>
					</section>

					<section className="cancel-icon">
						<p className="fs-5 text-light m-0">x</p>
					</section>

			</section>

		</React.Fragment>

	)
}

export default ConversionCard;