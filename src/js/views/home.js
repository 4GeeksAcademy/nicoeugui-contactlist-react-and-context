import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	// <div classNameName="text-center mt-5">
	// 	<h1>Hello Rigo!</h1>
	// 	<p>
	// 		<img src={rigoImage} />
	// 	</p>
	// 	<a href="#" classNameName="btn btn-success">
	// 		If you see this green button, bootstrap is working
	// 	</a>
	// </div>
	<section className="vh-100 w-100 bg-light">
		<div className='container h-100'>
			<div className='row d-flex justify-content-center align-items-center h-100'>
				<div className='col-md-6 col-xl-6'>
					<div className='card'>
						<div className="card-body bg-dark rounded">
							<div className="container">
								<Link to="/create-contact">
									<li className="nav-item">
										<a type="button" className="btn btn-primary">Crear Contacto</a>
									</li>
								</Link>
								<table className="table table-dark mb-0 mt-3">
									<tbody className="table-group-divider">
										<tr>
											<th scope="row">Persona</th>
											<th scope="row">Datos Personales</th>
											<th scope="row">Acciones</th>
										</tr>

										<tr>
											<td className="">
												persona
											</td>
											<td className="">
												Datos
											</td>
											<td className="">
												<button type="button" className="btn btn-outline-warning me-2">Editar</button>
												<button type="button" className="btn btn-outline-danger">Borrar</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

);
