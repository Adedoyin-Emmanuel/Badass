import jQuery from "jquery";
import * as Badass from "./BADASS_APIKEY";

interface ConvertJSONResponse
{
	data: string,
	code: number
}

export const checkSubmit = (e: any)=>{
	jQuery(($)=>{
		$.noConflict();

		const files = e.target.files;

		const formData = new FormData(), fileArray = [...files];
		
		fileArray.forEach((file: any, fileIndex: number)=>{
			formData.append("files[]", files[fileIndex]);
			console.log(files[fileIndex]);
		})

		//connect to the backend
		$.ajax({
			url:`http://localhost/badass-backend/api/convert/?app_id=${Badass.API_KEY}`,
			type: "post",
			data: formData,
			processData: false,
			contentType: false,
			success: (response:string) =>{
				const parsedResponse: ConvertJSONResponse = JSON.parse(response);
				
			},

			error: (xhr:object, status:string, error: string) =>{
				console.log("Upload error");
				console.log(error);
			}


		})
	})
}