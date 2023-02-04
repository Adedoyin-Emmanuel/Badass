import jQuery from "jquery";

const sayHello = () => {
	jQuery(($) => {
		$.ajax({
			url: "http://localhost/badass-ts/src/backend/",
			success: (results:string) => {
				JSON.parse(results).forEach(
					(result: any, resultIndex: number) => {
                        console.log(result.username);
                    }
				);
			},
			error: (error) => {
				console.error(error);
			},
		});
	});
};

export default sayHello;
