import jQuery from "jquery";
import * as Badass from "./BADASS_APIKEY";
const sayHello = () => {
	jQuery(($) => {
		$.ajax({
			url: `https://badass-backend.up.railway.app/api/convert?app_id=${Badass.API_KEY}`,
			type:"GET",
			
			success: (results:any) => {
				// const $result = JSON.parse(results);

				// console.log($result.code);

				//console.log(results);
			},
			error: (xhr, status, error) => {
				console.log(error);
			},
			
		});
	});
};

export default sayHello;
