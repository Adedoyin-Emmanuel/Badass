import jQuery from "jquery";
import * as Badass from "./BADASS_APIKEY";

interface ConvertJSONResponse
{
	data?: string,
	code?: number,
	filename?: string[]
	extension?: string,
	filesize?: number
}

export const checkSubmit = (e: any)=>{
	jQuery(($)=>{
		$.noConflict();

		const files = e.target.files;

		const formData = new FormData(), fileArray = [...files];
		
		fileArray.forEach((file: string[], fileIndex: number)=>{
			formData.append("files[]", files[fileIndex]);
		})

		//connect to the backend
		$.ajax({
			url:`http://localhost/badass-backend/api/convert/?app_id=${Badass.API_KEY}`,
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
			success: (response:string) =>{
				const parsedResponse = JSON.parse(response);
				parsedResponse.forEach((response: ConvertJSONResponse)=>{
					console.log(response.filename);
					console.log(response.extension);
					console.log(response.filesize);
				})
			},

			error: (xhr:object, status:string, error: string) =>{
				console.log("Upload error");
				console.log(error);
			}


		})
	})
}