import React from "react";

interface ImagePreviewCardProps
{
	setImagePreviewSrc?: string,
	setBgColor?: string,
	color?:string,
	altDescription?: string,
	src?:string
}

const ImagePreviewCard = ({setImagePreviewSrc, setBgColor, color, altDescription, src}: ImagePreviewCardProps): JSX.Element => {
	return (

		<React.Fragment>

			<section className="image-card-container shadow">

				<section className="image-container">

					<img src={src} alt={`relating to${altDescription}`} className = "img"/>

				</section>

			</section>

		</React.Fragment>
	)
}

export default ImagePreviewCard;