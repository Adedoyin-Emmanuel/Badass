import $ from "jquery";
import db from "./../backend/db";
import Swal from "sweetalert2";
import * as UNSPLASH_API from "./UNSPLASH_APIKEY";
import JSZip from 'jszip'
import saveAs from "file-saver";

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

export interface HandleImageDownloadProps
{
	id:number | string,
	total: number,
	perPage: number,
	title: string,
	user: string
}

const images = [];
let page = 1;
export const handleImageDownload = (id, total, perPage, title, user) =>{
	
	const totalImages = total;

	$.ajax({
		url:`https://api.unsplash.com/collections/${id}/photos?client_id=${UNSPLASH_API.API_KEY}&page=${page}&per_page=${perPage}`,
		processData:false,
		contentType:false,
		success: (data:any) =>{
			images.push(...data);
			if(images.length == totalImages)
			{
				//alert the user the download would start soon

				const zip = new JSZip();
				let photoZip =  zip.folder(`${title} by ${user}`);
				const promises = <any>[];

				for(let i = 0; i < images.length; i++)
				{
					
					// const promise = $.ajax({
					// 	url:images[i].urls.regular,
					// 	processData:false,
					// 	contentType:false,
					// 	method: "GET",
    				// 	dataType: "blob",
					// 	success: (response: Blob)=>{
					// 		console.log(response);
					// 		photoZip.file(`${title + [i]}.jpg`, response);
					// 		promises.push(promise);

					// 		if(promises.length == images.length)
					// 		{
					// 			promises.all(promises).then(()=>{
					// 				zip.generateAsync({type:"blob"}).then((content)=>{
					// 					saveAs(content,`${title} by ${user} image pack.zip`);
					// 					console.log("haba");
					// 				});
					// 			})
					// 		}
					// 	},

					// 	error: (xhr:any, status: any, error: string) =>{
					// 		console.log(error);
					// 	}
					// })

					 const promise = fetch(images[i].urls.regular)
			                .then(response => response.blob())
			                .then(blob => {
			                    photoZip.file(`${title + [i]}.jpg`, blob)
			                    promises.push(promise)
			                    if (promises.length == images.length) {
			                        Promise.all(promises).then(()=> {
			                        zip.generateAsync({type:"blob"}).then((content)=>{
			                        saveAs(content, `${title} by ${user} image pack.zip`)
			                 })
			             });
		               }
		            })
				}
			}else{
				//console.log("whala");
				 page++;
				//console.log(images.length);
				//console.log(totalImages);
				handleImageDownload(id, totalImages, 30, title, user);
			}

		},

		error: (xhr:any, status: any, error:string) =>{
			//alert the user an error occured
			console.log(error);
		}
	});
}