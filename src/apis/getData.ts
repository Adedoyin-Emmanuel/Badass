import jQuery from "jquery";

const sayHello = () => {
	jQuery(($) => {
		$.noConflict();

		console.log("Hello world");
	});
};


export default sayHello;