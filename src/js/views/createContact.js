import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

const CreateContact = (props) => {
    const {store, actions} = useContext(Context)
    const [contacto, setContacto] = useState({});
    
    const handleChange = (e)=> {
        setContacto({...contacto, [e.target.name]:e.target.value})
        
    }

    const navigate = useNavigate();

    return (
        <>
        <h1 className='text-center mt-3'> Creacion de contacto</h1>

        <div className='container bg-dark rounded'>

            <form className="row g-3 mt-5">

                <div className="col-md-6 text-white">
                    <label for="full_name" className="form-label">Nombre Completo</label>
                    <input name='full_name' required type="text"  className="form-control" id="full_name" onChange={handleChange}/>
                </div>

                <div className="col-md-6 text-white">
                    <label for="email" className="form-label">Email</label>
                    <input name='email' required type="email" className="form-control" id="email" onChange={handleChange}/>
                </div>

                <div className="col-6 text-white">
                    <label for="address" className="form-label">Direccion</label>
                    <input name='address' required type="text" className="form-control" id="address" onChange={handleChange}/>
                </div>
                
                <div className="col-md-6 text-white">
                    <label for="phone" className="form-label">Telefono</label>
                    <input name='phone' required type="tel" className="form-control" id="phone" onChange={handleChange}/>
                </div>

            
                <div className="col-12 mb-3">
                    <button type="submit" className="btn btn-primary" onClick={()=>{
                        actions.createContact(contacto)
                        navigate("/")
                    }}>Registrar</button>
                </div>

            </form>
        </div>
        </>
    )
}

export default CreateContact