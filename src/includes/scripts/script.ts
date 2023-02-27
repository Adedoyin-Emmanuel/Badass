import jQuery from "jquery";

export const navigate = (page: string): void => {
    window.location.href = `${page}`;
}

export const convertBytesToKb = (byte: number) =>{
    return (Math.ceil(byte / 1024));
}

export const getFileExtensionFromMimeType = (mimeType: string): string =>{
  const mimeType = "image/png";
  const extension = mimeType.split("/")[1];

  return extension;
}

export const isImage = (file: any): boolean => {

  const extensions = ["jpg", "jpeg", "png", "gif", "svg"];
  const extension = file.name.split(".").pop();
  return extensions.includes(extension);

}

export const removeSymbols = (str: string): string =>{
  return str.replace(/[^a-zA-Z]/g, '');
}



export const returnFileExtension = (file: File): string =>{
    const fileName: string = file.name;
    const fileExtension: string = fileName.split('.').pop()!;

    return fileExtension;
}

jQuery(($)=>{

    $.noConflict();

    $("#spinner").css({"display" : "none"});
})

