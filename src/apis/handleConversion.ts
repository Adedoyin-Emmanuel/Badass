import jQuery from "jquery";
import * as Badass from "./BADASS_APIKEY";

export const checkSubmit = (e: any)=>{
	jQuery(($)=>{
		$.noConflict();

		const files = e.target.files;

		const formData = new FormData();

		for(let i = 0; i < files.length; i++)
		{
			const file: number = files[i];

			formData.append('files[]', files[i]);
		}

		//connect to the backend
		$.ajax({
			url:`http://localhost/badass-backend/api/convert/?app_id=${Badass.API_KEY}`,
			type: "post",
			data: formData,
			processData: false,
			contentType: false,
			success: (response: string) =>{
					console.log(response);
			},

			error: (xhr:object, status:string, error: string) =>{
				console.log("Upload error");
				console.log(error);
			}


		})
	})
}