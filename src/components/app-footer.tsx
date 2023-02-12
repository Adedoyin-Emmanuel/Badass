import React from "react";
import FooterNav from "./footer-nav";

interface AppFooterProp
{
	childrenCurrentActivePage ?: string
}
const AppFooter = (props: AppFooterProp): JSX.Element =>{
	return (

		<React.Fragment>
			<section className="app-footer m-auto d-flex align-items-center justify-content-center flex-row">
				<FooterNav currentActivePage={props.childrenCurrentActivePage}/>
			</section>
		</React.Fragment>

	)
}


export default AppFooter;