import React from "react";


interface ConvertProp
{
	convertToText: string,
	convertToClick: () => any
}

const ConvertTo = ({convertToText, convertToClick}) =>{
	return (

		<React.Fragment>

				<section className = {`conversion-status  d-flex align-items-center justify-content-center p-1  rounded-1 brand-white-color-outline mx-1`} onClick={convertToClick}>
					<p className="text-light text-muted brand-small-text-2 text-capitalize m-0">{convertToText}</p>
				</section>

		</React.Fragment>

	)
}

export default convertTo;