import jQuery from "jquery";
import * as Badass from "./BADASS_APIKEY";

export const checkSubmit = (e: any)=>{
	jQuery(($)=>{
		$.noConflict();

		const files = e.target.files;

		for(let i = 0; i < files.length; i++)
		{
			const file: number = files[i];

			//connect to the backend

			$.ajax({
				url:"http://localhost/badass-backend/api/convert/?app_id=d847b2e0-14f9-11e9-b5dc-0242ac130003"
			})
		}
	})
}