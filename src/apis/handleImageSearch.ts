import $ from "jquery";
import db from "./../backend/db";
import Swal from "sweetalert2";
import * as UNSPLASH_API from "./UNSPLASH_APIKEY";

const trimSearch = (element:any) =>{
	return element.val().trim();
}


export const searchImage = () =>{

		const searchData = trimSearch($("#image-search"));
		db.update("BADASS_SEARCH_ITEM", searchData);

		return $.ajax({
			url:`https://api.unsplash.com/search/collections/?per_page=20&client_id=${UNSPLASH_API.API_KEY}&query=${searchData}`,
			processData:false,
			contentType:false
		});
}

export const searchImageByCollectionId = (id: string)=>{
	let collectionId = id;

	return $.ajax({
		url: `https://api.unsplash.com/collections/${collectionId}/photos?client_id=${UNSPLASH_API.API_KEY}&per_page=30`,
		processData: false,
		contentType:false
	});
}