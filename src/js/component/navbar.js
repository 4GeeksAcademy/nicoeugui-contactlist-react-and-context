import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		// <nav classNameName="navbar navbar-light bg-light mb-3">
		// 	<Link to="/">
		// 		<span classNameName="navbar-brand mb-0 h1">React Boilerplate</span>
		// 	</Link>
		// 	<div classNameName="ml-auto">
		// 		<Link to="/demo">
		// 			<button classNameName="btn btn-primary">Check the Context in action</button>
		// 		</Link>
		// 	</div>
		// </nav>
		<nav className="navbar navbar-expand-lg bg-dark border-body" data-bs-theme="dark">
			<div className="container-fluid">
				<a class="navbar-brand" href="#">
					<img src="https://media.discordapp.net/attachments/1154140630914699355/1177016528890232852/MingcuteContacts2Fill.png?ex=6570f910&is=655e8410&hm=09b966d7d0308953c0c46fef168c4b77a14b6b31e9a79e40f594f136e1ff3d8b&=&format=webp" alt="..." height="36" />
				</a>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<Link to={"/create-contact"}>
							<li className="nav-item">
								<button type="button" className="btn btn-primary">Crear Contacto</button>
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};
