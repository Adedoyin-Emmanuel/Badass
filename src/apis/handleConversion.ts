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
	converting_to?: string,
	convert_status?: number,
	message?: string,
	image_data?:any
}

export const connectToBackend = (formData: any, selectedFormat: string) =>{
		return $.ajax({
            url:`https://testbasedev.000webhostapp.com/api/convert/index.php?app_id=${Badass.API_KEY}&convert_to=${selectedFormat}`,
			method: "POST",
			contentType:false,
			processData:false,
			data: formData,
			
		});
}
