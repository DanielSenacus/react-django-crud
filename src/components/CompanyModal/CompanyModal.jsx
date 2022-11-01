import React, { useState } from "react";
import * as server from "../../server";
import { Alert } from "@mui/material";
import CloseButton from "react-bootstrap/CloseButton";
import "./CompanyModal.scss";
import AdminDropDown from "../AdminDropDown/AdminDropDown";

const CompanyModal = ({ setCreateCompany }) => {
  const [error, setError] = useState(false);
  const [body, setBody] = useState({
    adminUser: "",
    nit: "",
    email: "",
    phone: "",
    companysName: "",
    address: "",
    companysBrandName: "",
    webstie: "",
  });

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({ ...body, [name]: value });
  };

  const validateForm = (body) => {
    let isEmpty = [];
    const {
      adminUser,
      nit,
      email,
      phone,
      companysName,
      address,
      companysBrandName,
      webstie,
    } = body;

    const fieldValues = [
      adminUser,
      nit,
      email,
      phone,
      companysName,
      address,
      companysBrandName,
      webstie,
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

  const CreateCompany = async (body) => {
    if (validateForm(body)) {
      setError(true);
      return;
    }

    setError(false);
    console.log(body);

    try {
      const res = await server.RegisterCompany(body);
      const data = await res.json();
      console.log(res);
      setCreateCompany(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <section className='vh-100 gradient-custom-company'>
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
                    <h3>Registrar Empresa</h3>
                    <CloseButton
                      onClick={() => setCreateCompany(false)}
                      className='btn btn-primary btn-danger'
                    ></CloseButton>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className='row'>
                      <div className='col-md-6 mb-4'>
                        <AdminDropDown
                          body={body}
                          setBody={setBody}
                        ></AdminDropDown>
                      </div>
                      <div className='col-md-6 mb-4'>
                        <div className='form-outline'>
                          <input
                            type='text'
                            id='lastName'
                            className='form-control form-control-lg'
                            value={body.nit}
                            onChange={inputChange}
                            name='nit'
                            required
                          />
                          <label className='form-label'>Nit</label>
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
                          <label className='form-label'>Direccion</label>
                        </div>
                      </div>
                      <div className='col-md-6 mb-4 pb-2'>
                        <div className='form-outline'>
                          <input
                            className='form-control form-control-lg'
                            value={body.companysName}
                            onChange={inputChange}
                            name='companysName'
                            required
                          />
                          <label className='form-label'>
                            Nombre de Empresa
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
                          <label className='form-label'>Email</label>
                        </div>
                      </div>
                      <div className='col-md-6 mb-4 pb-2'>
                        <div className='form-outline'>
                          <input
                            className='form-control form-control-lg'
                            value={body.companysBrandName}
                            onChange={inputChange}
                            name='companysBrandName'
                            type='text'
                            required
                          />
                          <label className='form-label'>Nombre Comercial</label>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-6 mb-4 pb-2'>
                        <div className='form-outline'>
                          <input
                            type='url'
                            className='form-control form-control-lg'
                            value={body.webstie}
                            onChange={inputChange}
                            name='webstie'
                            required
                          />
                          <label className='form-label'>Website</label>
                        </div>
                      </div>
                      <div className='col-md-6 mb-4 pb-2'>
                        <div className='form-outline'>
                          <input
                            type='phone'
                            className='form-control form-control-lg'
                            value={body.phone}
                            onChange={inputChange}
                            name='phone'
                            required
                          />
                          <label className='form-label'>Telefono</label>
                        </div>
                      </div>

                      <div className='col-md-6 mb-4 pb-2'>
                        <button
                          className='btn btn-primary btn-lg'
                          type='submit'
                          value='Crear'
                          onClick={() => CreateCompany(body)}
                          required
                        >
                          Crear Empresa
                        </button>
                      </div>
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

export default CompanyModal;
