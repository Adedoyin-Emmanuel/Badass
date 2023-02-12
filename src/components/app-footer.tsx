import React from "react";
import FooterNav from "./footer-nav";
const AppFooter = (): JSX.Element =>{
	return (

		<React.Fragment>
			<section className="app-footer m-auto d-flex align-items-center justify-content-center flex-row">
				<FooterNav/>
			</section>
		</React.Fragment>

	)
}


export default AppFooter;