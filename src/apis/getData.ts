import jQuery from "jquery";

const sayHello = () => {
	jQuery(($) => {
		$.ajax({
            url:"http://localhost/badass-ts/src/backend/",
            success: (result:string)=>{
        
            },
            error: (error) =>{
                console.error(error);
            }
        })
	});
};


export default sayHello;