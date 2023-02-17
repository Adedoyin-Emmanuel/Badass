import jQuery from "jquery";

export const checkSubmit = (e: any)=>{
	jQuery(($)=>{
		$.noConflict();

		const files = e.target.files;

	
		console.log(files);
	})
}