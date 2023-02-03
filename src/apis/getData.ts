import jQuery from "jquery";

const sayHello = () => {
	jQuery(($) => {
		$.ajax({
            url:"http://localhost/baddass-ts/src/backend/",
            success: (result:string)=>{
                console.log(result);
            }
        })
	});
};


export default sayHello;