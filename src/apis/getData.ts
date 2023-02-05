import jQuery from "jquery";

const sayHello = () => {
	jQuery(($) => {
		$.ajax({
			url: "https://badass-ts.vercel.app/backend/",
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
