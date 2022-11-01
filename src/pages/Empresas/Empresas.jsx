import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import * as server from "../../server";

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
                  <h4 className='heading heading5 hind-font medium-font-weight c-dashboardInfo__title'>
                    {company.companysName}
                  </h4>
                  <div className='company_section'>
                    <Table responsive striped bordered hover size='sm'>
                      <th>
                        <tr>#</tr>
                        <tr>Nombre</tr>
                        <tr>Nombre Comercial</tr>
                        <tr>nit</tr>
                        <tr>Direccion</tr>
                        <tr>Dirección</tr>
                        <tr>Email</tr>
                        <tr>Telefono</tr>
                        <tr>Localidad</tr>
                      </th>

                      <th key={company.id}>
                        <tr>{company.id}</tr>
                        <tr>{company.companysName}</tr>
                        <tr>{company.companysBrandName}</tr>
                        <tr>{company.nit}</tr>
                        <tr>{company.address}</tr>
                        <tr>{company.emaik}</tr>
                        <tr>{company.phone}</tr>
                        <tr>{company.location}</tr>
                      </th>
                    </Table>
                  </div>
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
