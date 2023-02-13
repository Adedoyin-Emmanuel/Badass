import jQuery from "jquery";

export const navigate = (page: string): void => {
    window.location.href = `${page}`;
}



jQuery(($)=>{

    $.noConflict();

    $("#spinner").css({"display" : "none"});
})