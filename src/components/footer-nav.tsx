import React from "react";


const FooterNav = (): JSX.Element => {
    return (

        <React.Fragment>

			<section className="app-footer-nav d-flex flex-row align-items-center justify-content-around">

				<section className="convert-nav">
					<section className="footer-icon d-flex flex-row align-items-center justify-content-center py-2">
						

							<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 225.000000 225.000000"
							 	preserveAspectRatio="xMidYMid meet"

							   	width={"15px"}
			              		height={"15px"}
			              		className="footer-svgs text-center m-auto"
							 >

							<g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
							fill="#fff" stroke="none">
							<path d="M1190 2225 c-8 -2 -46 -7 -83 -10 -56 -6 -70 -11 -83 -30 -24 -37 -5
							-62 54 -70 205 -27 340 -86 468 -207 48 -46 103 -110 128 -152 139 -222 164
							-492 68 -738 -28 -74 -116 -218 -132 -218 -4 0 -47 41 -96 90 -77 80 -92 91
							-119 88 l-30 -3 -3 -369 c-2 -264 1 -373 9 -382 9 -11 77 -14 360 -14 303 0
							350 2 363 16 9 8 16 22 16 31 0 8 -43 59 -95 113 l-95 98 63 84 c174 230 244
							443 234 708 -6 168 -28 256 -102 405 -139 283 -388 481 -675 538 -77 16 -223
							28 -250 22z"/>
							<path d="M158 2029 c-38 -22 -21 -56 72 -147 50 -49 90 -95 90 -104 0 -8 -9
							-23 -21 -34 -70 -63 -202 -310 -239 -449 -33 -120 -38 -329 -12 -455 55 -266
							212 -502 432 -649 160 -107 316 -154 515 -155 170 -1 223 8 237 40 17 37 -5
							52 -96 64 -322 45 -566 255 -657 566 -46 158 -34 368 31 530 32 79 114 214
							131 214 5 0 48 -40 96 -90 47 -49 94 -90 104 -90 51 0 49 -15 49 379 0 272 -3
							370 -12 379 -16 16 -694 17 -720 1z"/>
							</g>
							</svg>
														
					</section>
					<p className="brand-small-text-2 text-light text-muted m-0">Convert</p>
				</section>

				<section className="remove-bg-nav">
					<section className="d-flex align-items-center justify-content-center footer-icon py-2">

							 <svg
			              xmlns="http://www.w3.org/2000/svg"
			              width={"15px"}
			              height={"15px"}
			              className="footer-svgs text-center m-auto"
			              fill="#fff"
			              viewBox="0 0 512 512"
			            >
          		   		 <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
           				 </svg>
					</section>
						<p className="brand-small-text-2 text-light text-muted m-0">Upload</p>
				</section>

				<section className="search-nav">

					<section className="d-flex align-items-center justify-content-center footer-icon py-2">
						 <svg
			              xmlns="http://www.w3.org/2000/svg"
			              width={"15px"}
			              height={"15px"}
			              className="footer-svgs text-center m-auto"
			              fill="#fff"
			              viewBox="0 0 512 512"
			            >
          		   		 <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
           				 </svg>
					</section>
					<p className="brand-small-text-2 text-light text-muted m-0">Search</p>
				</section>


				<section className="settings-nav">
					<section className="footer-icon d-flex align-items-center justify-content-center py-2">
						 <svg
			              width={"15px"}
			              height={"15px"}
			              className="footer-svgs text-center m-auto"
			              fill="#fff"
			              xmlns="http://www.w3.org/2000/svg"
			              viewBox="0 0 512 512"
			            >
              			<path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
            			</svg>
					</section>
						<p className="brand-small-text-2 text-light text-muted m-0">Settings</p>
				</section>

				<section className="support-nav">

					<section className="footer-icons d-flex align-items-center justify-content-center py-2">
							 <svg
				              width={"15px"}
				              height={"15px"}
				              className="footer-svgs text-center m-auto"
				              fill="#fff"
				              xmlns="http://www.w3.org/2000/svg"
				              viewBox="0 0 512 512"
				            >
              				<path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z" />
           					</svg>
					</section>
					<p className="brand-small-text-2  text-light text-muted m-0">Support</p>

				</section>

			</section>

		</React.Fragment>

    );
}



export default FooterNav;