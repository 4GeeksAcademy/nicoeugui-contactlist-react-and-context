import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark border-body" data-bs-theme="dark">
			<div className="container-fluid">
				<Link to={"/"}>
					<a className="navbar-brand">
						<img src="https://media.discordapp.net/attachments/1154140630914699355/1177016528890232852/MingcuteContacts2Fill.png?ex=6570f910&is=655e8410&hm=09b966d7d0308953c0c46fef168c4b77a14b6b31e9a79e40f594f136e1ff3d8b&=&format=webp" alt="..." height="36" />
					</a>
				</Link>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<Link className="text-decoration-none text-white me-2" to={"/"}>
							<li className="nav-item">
								<span href="#">Listar Contactos</span>
							</li>
						</Link>

						<Link className="text-decoration-none text-white" to={"/create-contact"}>
							<li className="nav-item">
								<span href="#">Crear Contacto</span>
							</li>
						</Link>

					</ul>
				</div>
			</div>
		</nav>
	);
};
