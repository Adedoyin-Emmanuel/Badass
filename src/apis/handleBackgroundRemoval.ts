
			const foto = document.getElementById("foto");


			  foto.addEventListener('change', (event) => {
				    const selectedFile = event.target.files[0];
				    const fileName = selectedFile.name;
					const form = new FormData();
					form.append('image_file', selectedFile);




						fetch('https://clipdrop-api.co/remove-background/v1', {
						  method: 'POST',
						  headers: {
						    'x-api-key': "3ac5c163b0dcfff7ff7349fa2d2dcb810f4aae1375d3b8df38a0a6abe31c4fe5f7ef7d2f15432cc1cead52d26646cdc4",
						  },
						  body: form,
						})

					  .then(response => response.arrayBuffer())
					  .then(buffer => {

					  	console.log(buffer);

				  		// Assume binaryData is the binary representation of the image returned from the API
						const binaryData =buffer /* your binary image data */;

							const imageArrayBuffer = buffer /* your image ArrayBuffer */;

					// Check the first few bytes of the ArrayBuffer to determine the file type
					const header = new Uint8Array(imageArrayBuffer, 0, 16);
					let extension = '';

					if (header[0] === 0xff && header[1] === 0xd8) {
					  extension = 'jpg';
					} else if (header[0] === 0x89 && header[1] === 0x50 && header[2] === 0x4e && header[3] === 0x47) {
					  extension = 'png';
					} else if (header[0] === 0x47 && header[1] === 0x49 && header[2] === 0x46 && header[3] === 0x38) {
					  extension = 'gif';
					} else if (header[0] === 0x42 && header[1] === 0x4d) {
					  extension = 'bmp';
					}

						// Create a blob from the binary data
						const blob = new Blob([binaryData], { type: `image/${extension}` });

						// Create a URL for the blob
						const url = URL.createObjectURL(blob);

						// Assume imageArrayBuffer is the ArrayBuffer that represents the image data
				

					if (extension) {
					  console.log(`The file extension is ${extension}`);
					} else {
					  console.log('The file type is not recognized');
					}



						// Create an <a> element with the URL as its href attribute
							const link = document.createElement('a');
							link.href = url;

							// Set the download attribute to specify the file name
							link.setAttribute('download', `myImage.${extension}`);

							// Append the <a> element to the document
							document.body.appendChild(link);

							// Trigger a click event on the <a> element to download the file
							link.click();


						// Create an <img> element and set its src attribute to the URL
						//const img = document.createElement('img');
						//img.src = url;

						// Append the <img> element to the document
						//document.body.appendChild(img);

						// Clean up by revoking the URL object
						URL.revokeObjectURL(url);


					  });




				   	
			  });


			
