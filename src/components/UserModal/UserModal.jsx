import React, { useState } from "react";
import * as server from "../../server";
import { Alert } from "@mui/material";
import "./UserModal.scss";

const UserModal = ({ setCreateUser }) => {
    const [error, setError] = useState(false);
    const [body, setBody] = useState({
        email: "",
        password: "",
        phone: "",
        address: "",
        company: "",
        roles: "",
        name: "",
        lastname: "",
    });

    const inputChange = ({ target }) => {
        const { name, value } = target;
        setBody({ ...body, [name]: value });
    };

    const validateForm = (body) => {
        let isEmpty = [];
        const {
            name,
            lastname,
            email,
            password,
            phone,
            address,
            company,
            roles,
        } = body;

        const fieldValues = [
            name,
            lastname,
            email,
            phone,
            password,
            address,
            company,
            roles,
        ];

        fieldValues.map((value) => {
            if (value === "" || value == null) {
                isEmpty.push("error");
            }
        });

        if (isEmpty.length > 0) {
            return true;
        }
        return false;
    };

    const CreateUser = async (body) => {
        if (validateForm(body)) {
            setError(true);
            return;
        }

        setError(false);
        console.log(body);

        // try {
        //     const res = await server.checkAccount(body);
        //     const data = await res.json();
        //     console.log(data);
        // } catch (error) {
        //     console.log(error);
        // }
    };
    return (
        <div>
            <section className='vh-100 gradient-custom'>
                <div className='container py-5 h-100'>
                    <div className='row justify-content-center align-items-center h-100'>
                        <div className='col-12 col-lg-9 col-xl-7'>
                            <div
                                className='card shadow-2-strong card-registration'
                                style={{ marginRight: "15px" }}
                            >
                                {error && (
                                    <Alert severity='error' variant='filled'>
                                        Por favor complete todos los campos
                                    </Alert>
                                )}
                                <div className='card-body p-4 p-md-5'>
                                    <div className='form_title'>
                                        <h3>Registrar Usuario</h3>
                                        <button
                                            onClick={() => setCreateUser(false)}
                                            className='btn btn-primary btn-danger'
                                        >
                                            X
                                        </button>
                                    </div>
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <div className='row'>
                                            <div className='col-md-6 mb-4'>
                                                <div className='form-outline'>
                                                    <input
                                                        type='text'
                                                        id='firstName'
                                                        className='form-control form-control-lg'
                                                        value={body.name}
                                                        onChange={inputChange}
                                                        name='name'
                                                        required
                                                    />
                                                    <label className='form-label'>
                                                        Nombres
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-md-6 mb-4'>
                                                <div className='form-outline'>
                                                    <input
                                                        type='text'
                                                        id='lastName'
                                                        className='form-control form-control-lg'
                                                        value={body.lastname}
                                                        onChange={inputChange}
                                                        name='lastname'
                                                        required
                                                    />
                                                    <label className='form-label'>
                                                        Apellidos
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-6 mb-4 d-flex align-items-center'>
                                                <div className='form-outline datepicker w-100'>
                                                    <input
                                                        type='text'
                                                        className='form-control form-control-lg'
                                                        id='birthdayDate'
                                                        value={body.address}
                                                        onChange={inputChange}
                                                        name='address'
                                                        required
                                                    />
                                                    <label className='form-label'>
                                                        Direccion
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-md-6 mb-4'>
                                                <h6 className='mb-2 pb-1'>
                                                    Funcion:{" "}
                                                </h6>

                                                <div className='form-check form-check-inline'>
                                                    <input
                                                        className='form-check-input'
                                                        type='radio'
                                                        value='user'
                                                        onChange={inputChange}
                                                        name='roles'
                                                        required
                                                    />
                                                    <label className='form-check-label'>
                                                        Empleado
                                                    </label>
                                                </div>

                                                <div className='form-check form-check-inline'>
                                                    <input
                                                        className='form-check-input'
                                                        type='radio'
                                                        value='admin'
                                                        onChange={inputChange}
                                                        name='roles'
                                                        required
                                                    />
                                                    <label className='form-check-label'>
                                                        Admnistrador
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-6 mb-4 pb-2'>
                                                <div className='form-outline'>
                                                    <input
                                                        type='email'
                                                        id='emailAddress'
                                                        className='form-control form-control-lg'
                                                        value={body.email}
                                                        onChange={inputChange}
                                                        name='email'
                                                        required
                                                    />
                                                    <label className='form-label'>
                                                        Email
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-md-6 mb-4 pb-2'>
                                                <div className='form-outline'>
                                                    <input
                                                        className='form-control form-control-lg'
                                                        value={body.phone}
                                                        onChange={inputChange}
                                                        name='phone'
                                                        required
                                                    />
                                                    <label className='form-label'>
                                                        Telefono
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6 mb-4 pb-2'>
                                                <div className='form-outline'>
                                                    <input
                                                        type='password'
                                                        className='form-control form-control-lg'
                                                        value={body.password}
                                                        onChange={inputChange}
                                                        name='password'
                                                        required
                                                    />
                                                    <label className='form-label'>
                                                        Contraseña
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-md-6 mb-4 pb-2'>
                                                <div className='form-outline'>
                                                    <input
                                                        className='form-control form-control-lg'
                                                        value={body.company}
                                                        onChange={inputChange}
                                                        name='company'
                                                        required
                                                    />
                                                    <label className='form-label'>
                                                        Empresa
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mt-4 pt-2'>
                                            <button
                                                className='btn btn-primary btn-lg'
                                                type='submit'
                                                value='Crear'
                                                onClick={() => CreateUser(body)}
                                                required
                                            >
                                                Crear Usuario
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UserModal;
