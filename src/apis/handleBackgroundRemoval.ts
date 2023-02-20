import jQuery from "jquery";
import * as REMOVE_API from "./REMOVE_BG_APIKEY";
import Swal from "sweetalert2";
import db from "./../backend/db";
interface SwalPromise
{
	isConfirmed: boolean,
}

export const removeUploadedFileBackground = (element:any) =>{
	$(`${element}`).on("change", (e: any)=>{
		const files= e.target.files;
		const formData = new FormData(), fileArray = [...files];

		fileArray.forEach((file: any, fileIndex: number)=>{
			 formData.append("image_file", files[fileIndex]);
			 let fileName = file.filename;
             db.create(`BADASS_REMOVE_TOTAL_FILES_UPLOADED`, files.length);

             //connect to the API
             fetch('https://clipdrop-api.co/remove-background/v1', {
				  method: 'POST',
				  headers: {
				    'x-api-key': REMOVE_API.API_KEY
				  },
				  body: formData,
				})
         	 	.then(response => response.arrayBuffer())
         	 	.then(buffer => {
					 console.log(buffer);

				     //binaryData is the binary representation of the image returned from the API
				     const binaryData = buffer;
					 const imageArrayBuffer = buffer;

					 const header = new Uint8Array(imageArrayBuffer, 0, 16);
					 let extension = '';

					 if (header[0] === 0xff && header[1] === 0xd8) 
					 {
					   extension = 'jpg';
					 } else if (header[0] === 0x89 && header[1] === 0x50 && header[2] === 0x4e && header[3] === 0x47) 
					 {
					  extension = 'png';
					 } else if (header[0] === 0x47 && header[1] === 0x49 && header[2] === 0x46 && header[3] === 0x38) 
					 {
					  extension = 'gif';
					 } else if (header[0] === 0x42 && header[1] === 0x4d) 
					 {
					   extension = 'bmp';
					 }

					const blob = new Blob([binaryData], { type: `image/${extension}` });

					const url = URL.createObjectURL(blob);

					if (!extension) {
					 	Swal.fire({
					 		text:"unrecognised file type!",
					 		toast:true,
					 		timer:4000,
					 		showConfirmButton:false
					 	}).then((willProceed: SwalPromise)=>{
					 		return;
					 	});
					}
					const link = document.createElement('a');

					link.href = url;

					link.setAttribute('download', `${fileName}.${extension}`);

					document.body.appendChild(link);
				
					link.click();

					URL.revokeObjectURL(url);

				});

		});
	});
}
