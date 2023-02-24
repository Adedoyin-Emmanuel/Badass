import $ from "jquery";
import db from "./../backend/db";
import Swal from "sweetalert2";

const trimSearch = (element:any) =>{
	return element.val().trim();
}



export const searchImage = () =>{

		const searchData = trimSearch($("#image-search"));
		db.update("BADASS_SEARCH_ITEM", searchData);
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

}