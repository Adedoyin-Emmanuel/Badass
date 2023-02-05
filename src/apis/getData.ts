import jQuery from "jquery";

const sayHello = () => {
	jQuery(($) => {
		$.ajax({
			url: "https://localhost:80/badass-backend/backend/",
			success: (result:any) => {
				console.log(result);
			},
			error: (error) => {
				console.error(error);
			},
		});
	});
};

export default sayHello;
