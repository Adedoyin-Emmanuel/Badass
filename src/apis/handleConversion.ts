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

export const connectToBackend = (formData: any, selectedFormat: string) =>{
		return $.ajax({
            url:`http://localhost/badass-backend/api/convert/?app_id=${Badass.API_KEY}&convert_to=${selectedFormat}`,
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
		});
}
