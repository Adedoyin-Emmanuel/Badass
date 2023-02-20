import jQuery from "jquery";

export const navigate = (page: string): void => {
    window.location.href = `${page}`;
}

export const convertBytesToKb = (byte: number) =>{
    return (Math.ceil(byte / 1024));
}


jQuery(($)=>{

    $.noConflict();

    $("#spinner").css({"display" : "none"});
})