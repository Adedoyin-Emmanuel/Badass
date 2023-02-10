import React from "react";
import Hero from "../components/hero";
const Header = () => {
	return (
		<React.Fragment>
			<nav
				className="navbar navbar-expand-sm brand-dark-color fixed-top"
				aria-label="Badass navbar">
				<div className="container-fluid">
					<a className="navbar-brand text-light fw-bold" href="#">
						Badass
					</a>
					<button
						className="mx-0 navbar-toggler border-0"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarsExample03"
						aria-controls="navbarsExample03"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="">
							<svg
								version="1.0"
								xmlns="http://www.w3.org/2000/svg"
								width="25"
								height="25"
								viewBox="0 0 225.000000 225.000000"
								preserveAspectRatio="xMidYMid meet">
								<g
									transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
									fill="none"
									stroke="none">
									<path
										fill="white"
										d="M135 2235 c-51 -18 -110 -81 -124 -131 -14 -52 -15 -685 0 -737 13
-49 63 -105 114 -128 36 -17 73 -19 391 -19 l352 0 53 28 c43 22 59 38 81 81
l28 53 0 352 c0 318 -2 355 -19 391 -23 51 -79 101 -128 114 -61 17 -698 14
-748 -4z m713 -496 c2 -260 0 -318 -12 -328 -9 -8 -102 -11 -327 -9 l-314 3
-3 328 -2 327 327 -2 328 -3 3 -316z"
									/>
									<path
										fill="white"
										d="M1356 2235 c-49 -17 -93 -59 -117 -110 -17 -37 -19 -71 -19 -391 l0
-352 28 -53 c22 -43 38 -59 81 -81 l53 -28 352 0 c318 0 355 2 391 19 51 23
101 79 114 128 15 53 14 685 0 738 -15 52 -82 119 -134 134 -62 17 -699 14
-749 -4z m702 -502 l-3 -328 -314 -3 c-223 -2 -318 1 -327 9 -11 9 -14 72 -14
324 0 171 3 315 7 318 3 4 152 7 330 7 l323 0 -2 -327z"
									/>
									<path
										fill="white"
										d="M125 1011 c-51 -23 -101 -79 -114 -128 -15 -53 -14 -685 0 -738 15
-52 82 -119 134 -134 53 -14 685 -15 738 0 49 13 105 63 128 114 17 36 19 73
19 391 l0 352 -28 53 c-22 43 -38 59 -81 81 l-53 28 -352 0 c-318 0 -355 -2
-391 -19z m714 -175 c8 -9 11 -104 9 -327 l-3 -314 -327 -3 -328 -2 0 323 c0
178 3 327 7 330 3 4 147 7 318 7 252 0 315 -3 324 -14z"
									/>
									<path
										fill="white"
										d="M1329 1002 c-43 -22 -59 -38 -81 -81 l-28 -53 0 -352 c0 -318 2 -355
19 -391 23 -51 79 -101 128 -114 53 -15 685 -14 738 0 52 15 119 82 134 134
14 53 15 685 0 738 -13 49 -63 105 -114 128 -36 17 -73 19 -391 19 l-352 0
-53 -28z m729 -485 l2 -327 -327 2 -328 3 -3 314 c-2 225 1 318 9 327 10 12
68 14 328 12 l316 -3 3 -328z"
									/>
								</g>
							</svg>
						</span>
					</button>

					<div className="collapse navbar-collapse" id="navbarsExample03">
						<ul className="navbar-nav me-auto mb-2 mb-sm-0">
							<li className="nav-item">
								<a
									className="nav-link text-light active"
									aria-current="page"
									href="#">
									Convert
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-light" href="#">
									Download
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-light" href="#">
									Remove Bg
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="py-3 d-sm-none d-md-block"></div>
			<Hero/>
		</React.Fragment>
	);
};

export default Header;
