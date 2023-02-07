import jQuery from "jquery";

const sayHello = () => {
	jQuery(($) => {
		$.ajax({
			url: "https://badass-backend.up.railway.app/",
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
