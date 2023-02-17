import jQuery from "jquery";
import * as Badass from "./BADASS_APIKEY";
const sayHello = () => {
	jQuery(($) => {
		$.ajax({
			url: `http://localhost/badass-backend/api/convert?app_id=${Badass.API_KEY}`,
			success: (results:any) => {
				// const $result = JSON.parse(results);

				// console.log($result.code);

				console.log(results);
			},
			error: (error) => {
				console.error(error);
			},
			
		});
	});
};

export default sayHello;
