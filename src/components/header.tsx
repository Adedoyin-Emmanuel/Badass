const Header = () => {
	return (
		<nav
			className="navbar navbar-expand-sm navbar-dark bg-dark"
			aria-label="Third navbar example">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Expand at sm
				</a>
				<button
					className="btn"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarsExample03"
					aria-controls="navbarsExample03"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={"30px"}
						height={"30px"}
						viewBox="0 0 24 24"
						className="d-block"
						>
						<path fill="none" className="bg-dark" d="M0 0h24v24H0V0z" />
						<path
							fill="white"
							d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"
						/>
					</svg>
					</span>
				</button>

				<div className="collapse navbar-collapse" id="navbarsExample03">
					<ul className="navbar-nav me-auto mb-2 mb-sm-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Link
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled">Disabled</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Dropdown
							</a>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="#">
										Action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Another action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
