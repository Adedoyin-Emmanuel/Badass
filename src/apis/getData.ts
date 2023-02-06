import jQuery from "jquery";

const sayHello = () => {
	jQuery(($) => {
		$.ajax({
			url: "http://prokeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeepe",
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
