import $ from "jquery";
import db from "./../backend/db";
import Swal from "sweetalert2";

const trimSearch = (element:any) =>{
	return element.val().trim();
}



export const searchImage= (element: string) =>{
	$(`#${element}`).on("submit", (e: any)=>{

		e.preventDefault();

		const searchData = trimSearch($("#image-search"));
		if(searchData == "" || searchData == " ")
		{
			Swal.fire({
				toast:true,
				text:"Enter a valid text",
				icon:"warning",
				timer:3000,
				showConfirmButton:false,
				position:"top"
			})
		}
		$("#image-search").val("");

		console.log(searchData.trim());
	});
}