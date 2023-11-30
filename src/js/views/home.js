import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const Home = () => {

	const { store, actions } = useContext(Context);

	const [agenda, setAgenda] = useState(store.agenda);

	useEffect(() => {
		setAgenda(store.agenda);
	}, [store.agenda])

	const [selectedContact, setSelectedContact] = useState(null);

	const openDeleteModal = (contact) => {
		setSelectedContact(contact);
	};

	return (
		<>
			<h1 className="text-center mt-5 mb-4">Lista de contactos</h1>
			<section className="vh-100 w-100 bg-light">
				<div className='container h-100'>
					<div className='row d-flex justify-content-center align-items-center h-95'>
						<div className='col-md-6 col-xl-6'>

							<Link to="/create-contact">
								<a type="button" className="btn btn-primary mb-3 mt-1">Crear Contacto</a>
							</Link>
							<div className='card'>
								<div className="card-body bg-dark rounded">
									<div className="table-container" style={{ maxHeight: "600px", overflowY: "auto" }}>
										<table className="table table-dark mb-0 mt-3 ">
											<tbody className="table-group-divider">
												<tr>
													<th scope="row">Persona</th>
													<th scope="row">Datos Personales</th>
													<th scope="row">Acciones</th>
												</tr>
												{agenda.map((contacto, index) => (
													<tr key={contacto.id}>
														<td>
															<img src={`https://i.pravatar.cc/100?img=${index}`} width={100} alt={`Avatar ${index}`} />
														</td>
														<td>
															{contacto.full_name} <br />
															{contacto.email} <br />
															{contacto.phone} <br />
															{contacto.agenda_slug} <br />
															{contacto.address}
														</td>
														<td>
															<a type="button" className="btn btn-danger mt-4" onClick={() => openDeleteModal(contacto)} data-bs-toggle="modal"
																data-bs-target="#deleteModal">
																<i class="fa-solid fa-trash"></i>
															</a>
															<Link to={`/edit-contact/${contacto.id}`}>
																<a type="button" className="btn btn-warning mt-4 ms-2">
																	<i class="fa-solid fa-pen"></i>
																</a>
															</Link>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="false">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-body">
								<div className="input-group">
									<h4>¿Está seguro que quiere eliminar el contacto?</h4>
								</div>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => {
									actions.deleteContact(selectedContact.id);
								}}>
									Confirmar
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}


export default Home
