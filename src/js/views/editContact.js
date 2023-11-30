import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";


const EditContact = () => {

    const params = useParams();

    useEffect( () =>{
        actions.getContactoById(params.id)
    }, []);

    const { store, actions } = useContext(Context);

    const [contacto, setContacto] = useState([]);
    console.log(contacto);

    useEffect(() => {
        console.log(contacto)
        setContacto(store.contactoToEdit);
    }, [store.contactoToEdit])

    const handleChange = (e) => {
        setContacto({ ...contacto, [e.target.name]: e.target.value })

    }

    return (
        <>
            <h1 className='text-center mt-3'> Edición de contacto</h1>

            <div className='container bg-dark rounded'>

                <form className="row g-3 mt-5">

                    <div className="col-md-6 text-white">
                        <label for="full_name" className="form-label">Nombre Completo</label>
                        <input name='full_name' required type="text" className="form-control" id="full_name" onChange={handleChange} value={contacto.full_name} />
                    </div>

                    <div className="col-md-6 text-white">
                        <label for="email" className="form-label">Email</label>
                        <input name='email' required type="email" className="form-control" id="email" onChange={handleChange} value={contacto.email} />
                    </div>

                    <div className="col-6 text-white">
                        <label for="address" className="form-label">Direccion</label>
                        <input name='address' required type="text" className="form-control" id="address" onChange={handleChange} value={contacto.address} />
                    </div>

                    <div className="col-md-6 text-white">
                        <label for="phone" className="form-label">Telefono</label>
                        <input name='phone' required type="tel" className="form-control" id="phone" onChange={handleChange} value={contacto.phone} />
                    </div>


                    <div className="col-12 mb-3">
                        <button type="submit" className="btn btn-primary" onClick={() => { actions.editContact(contacto) }}>Editar</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default EditContact