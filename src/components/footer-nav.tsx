import React from "react";


const FooterNav = (): JSX.Element =>{
	return (

		<React.Fragment>

			<section className="app-footer-nav d-flex align-items-center justify-content-around">

				<section className="convert-nav">
					<img src={} alt="convert-image"/>
				</section>

				<section className="remove-bg-nav">
					<img src={} alt="remove-bg-image"/>
				</section>

				<section className="app-nav">
					<img src={} alt="search-image"/>
				</section>


				<section className="settings-nav">
					<img src={} alt="settings-image"/>
				</section>

				<section className="support-nav">
					<img src={} alt="support-image"/>
				</section>

			</section>

		</React.Fragment>

	)
}