import jQuery from "jquery";

const sayHello = () => {
	jQuery(($) => {
		$.ajax({
			url: "../backend/index.php",
			success: (result:string) => {
				console.log(result);
			},
			error: (error) => {
				console.error(error);
			},
		});
	});
};

export default sayHello;
