import $ from "jquery";
import db from "./../backend/db";
import Swal from "sweetalert2";

const trimSearch = (element:any) =>{
	return element.val().trim();
}




export const searchImage = () =>{

		const searchData = trimSearch($("#image-search"));
		db.update("BADASS_SEARCH_ITEM", searchData);

		const key = "g7d7KRxOl8fE437qOTxlsf9XYcd3ApDgtZlLs5XMa3Y";

		return $.ajax({
			url:`https://api.unsplash.com/search/collections/?per_page=20&client_id=${key}&query=${searchData}`,
			processData:false,
			contentType:false,
		});

}