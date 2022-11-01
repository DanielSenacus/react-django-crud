import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import CloseButton from "react-bootstrap/CloseButton";
import * as server from "../../server";
import "./Empresas.scss";

const Empresas = () => {
  const [companyList, setCompanyList] = useState([]);

  const getCompanyList = async () => {
    try {
      const res = await server.getCompany();
      const data = await res.json();
      console.log(data);
      setCompanyList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCompany = async (id) => {
    try {
      const res = await server.DeleteCompany(id);
      const data = await res.json();
      await console.log(data);
      getCompanyList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCompanyList();
  }, []);

  return (
    <section className=''>
      <div className='title'>
        <h1>Empresas</h1>
      </div>
      <div id='root'>
        <div className='container pt-5'>
          <div className='row align-items-stretch'>
            {companyList.map((company) => (
              <div className='c-dashboardInfo col-lg-3 col-md-6'>
                <div className='wrap'>
                  <div className='wrap_header'>
                    <h4 className='heading heading5 hind-font medium-font-weight c-dashboardInfo__title'>
                      {company.companysName}
                    </h4>
                  </div>
                  <div className=' company_section'>
                    <Table responsive striped bordered hover size='sm'>
                      <th>
                        <tr>#</tr>
                        <tr>Nombre</tr>
                        <tr>Marca</tr>
                        <tr>nit</tr>
                        <tr>Direccion</tr>
                        <tr>Telefono</tr>
                        <tr>Email</tr>
                        <tr>Localidad</tr>
                      </th>

                      <th key={company.id}>
                        <tr>{company.id}</tr>
                        <tr>{company.companysName}</tr>
                        <tr>{company.companysBrandName}</tr>
                        <tr>{company.nit}</tr>
                        <tr>{company.address}</tr>
                        <tr>{company.phone}</tr>
                        <tr>{company.email}</tr>
                        <tr>{company.location}</tr>
                      </th>
                    </Table>
                  </div>
                  <button
                    onClick={() => deleteCompany(company.id)}
                    className='btn btn-primary btn-danger'
                  >
                    Eliminar Empresa
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empresas;
