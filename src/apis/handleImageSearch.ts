import $ from "jquery";
import db from "./../backend/db";
import Swal from "sweetalert2";

const trimSearch = (element:any) =>{
	return element.val().trim();
}



export const searchImage = () =>{
	//$(`#${element}`).on("submit", (e: any)=>{

		//e.preventDefault();

		const searchData = trimSearch($("#image-search"));
		db.update("BADASS_SEARCH_ITEM", searchData);
		console.log(db.get("BADASS_SEARCH_ITEM"));
		console.log(searchData);
		// if(searchData == "" || searchData == " ")
		// {
		// 	Swal.fire({
		// 		toast:true,
		// 		text:"Enter a valid text",
		// 		icon:"warning",
		// 		timer:3000,
		// 		showConfirmButton:false,
		// 		position:"top"
		// 	})
		// }
		//$("#image-search").val("");

		return db.get("BADASS_SEARCH_ITEM");
	//});

	//return db.get("BADASS_SEARCH_ITEM")	;
}