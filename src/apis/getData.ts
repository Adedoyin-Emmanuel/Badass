import jQuery from "jquery";

const sayHello = () => {
	jQuery(($) => {
		$.ajax({
			url: "http://localhost/badass-backend/api",
			success: (results:any) => {
				const $result = JSON.parse(results);

				console.log($result.code);
			},
			error: (error) => {
				console.error(error);
			},
		});
	});
};

export default sayHello;
