import $ from "jquery";
import * as Badass from "./BADASS_APIKEY";

export interface ConvertJSONResponse
{
	data?: string,
	code?: number,
	id?:   number,
	filename?: string,
	extension?: string,
	filesize?: string
}

export const connectToBackend = (formData: any) =>{
		return $.ajax({
			url:`https://badass-backend.up.railway.app/api/convert/?app_id=${Badass.API_KEY}`,
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
		});
}

// export const checkSubmit = (e: any)=>{
// 	jQuery(($)=>{
// 		$.noConflict();

// 		const files = e.target.files;

// 		const formData = new FormData(), fileArray = [...files];
		
// 		fileArray.forEach((file: string[], fileIndex: number)=>{
// 			formData.append("files[]", files[fileIndex]);
// 		})

// 		//connect to the backend
// 		connectToBackend(formData);

	// success: (response:string) =>{
	// 			const parsedResponse = JSON.parse(response);
	// 			parsedResponse.forEach((response: ConvertJSONResponse)=>{
	// 				setFileData(response);
					
	// 			})
	// 		},

	// 		error: (xhr:object, status:string, error: string) =>{
	// 			console.log("Upload error");
	// 			console.log(error);
	// 		}
// 	})
// }