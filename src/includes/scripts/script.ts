import jQuery from "jquery";

export const navigate = (page: string): void => {
    window.location.href = `${page}`;
}

export const convertBytesToKb = (byte: number) =>{
    return (Math.ceil(byte / 1024));
}

const getFileExtensionFromMimeType = (mimeType: string): string =>{
  const mimeToExt: Record<string, string> = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/gif": "gif",
    // Add more MIME types and their corresponding file extensions here
  };
  return mimeToExt[mimeType] || "";
}

export const isImage = (file: any): boolean => {

  const extensions = ["jpg", "jpeg", "png", "gif", "svg"];
  const extension = file.name.split(".").pop();
  return extensions.includes(extension);

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

