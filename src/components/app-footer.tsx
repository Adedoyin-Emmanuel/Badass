import React from "react";
import FooterNav from "./footer-nav";

interface AppFooterProp
{
	
	childrenConvertActivePage?: string,
	childrenUploadActivePage?: string,
	childrenSettingsActivePage?: string,
	childrenSupportActivePage?: string,
	childrenSearchActivePage?: string
}
const AppFooter = (props: AppFooterProp): JSX.Element =>{
	return (

		<React.Fragment>
			<section className="app-footer m-auto d-flex align-items-center justify-content-center flex-row">
				<FooterNav convertActivePage={props.childrenConvertActivePage} uploadActivePage={props.childrenUploadActivePage} settingsActivePage={props.childrenSettingsActivePage} supportActivePage={props.childrenSupportActivePage} searchActivePage={props.childrenSearchActivePage}/>
			</section>
		</React.Fragment>

	)
}


export default AppFooter;