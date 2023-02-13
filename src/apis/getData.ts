import jQuery from "jquery";

const sayHello = () => {
	const API_KEY = "d847b2e0-14f9-11e9-b5dc-0242ac130003";
	jQuery(($) => {
		$.ajax({
			url: `http://localhost/badass-backend/api/convert?app_id=${API_KEY}`,
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
