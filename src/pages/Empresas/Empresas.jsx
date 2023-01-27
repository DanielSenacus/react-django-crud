import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import CloseButton from "react-bootstrap/CloseButton";
import * as server from "../../server";
import "./Empresas.scss";

const companyData = [
  {
    id: "1",
    companysName: "Blacksmith Agency",
    companysBrandName: "Blacksmith",
    nit: "4471651489",
    address: "",
    email: "",
    location: "3",
  },
  {
    id: "2",
    companysName: "Joyas Maggia",
    companysBrandName: "Maggia",
    nit: "318745926",
    address: "",
    email: "",
    location: "2",
  },
  {
    id: "3",
    companysName: "Alicante S.A.S",
    companysBrandName: "Alicante",
    nit: "35127896",
    address: "",
    email: "",
    location: "1",
  },
  {
    id: "4",
    companysName: "Lucio-Licores",
    companysBrandName: "Lucio licores",
    nit: "195872364",
    address: "",
    email: "",
    location: "1",
  },
];

const Empresas = () => {
  const [companyList, setCompanyList] = useState(companyData);
  console.log(companyList);

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
    // try {
    //   const res = await server.DeleteCompany(id);
    //   const data = await res.json();
    //   await console.log(data);
    //   getCompanyList(data);
    // } catch (error) {
    //   console.log(error);
    // }

    const newList = companyList.filter((item) => item.id !== id);
    setCompanyList(newList);
  };

  useEffect(() => {
    getCompanyList();
  }, []);

  return (
    <section className=''>
      <div className='title'>
        <h1>Empresas</h1>
      </div>
      <div className='users_section'>
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Nit</th>
              <th>Direccion</th>
              <th>Email</th>
              <th>Localidad</th>
            </tr>
          </thead>
          <tbody>
            {companyList.map((company) => (
              <tr key={company.id}>
                <td>{company.id}</td>
                <td>{company.companysName}</td>
                <td>{company.companysBrandName}</td>
                <td>{company.nit}</td>
                <td>{company.address}</td>
                <td>{company.email}</td>
                <td>{company.location}</td>
                <td>
                  <button
                    onClick={() => deleteCompany(company.id)}
                    className='btn btn-primary btn-danger'
                  >
                    Eliminar Empresa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default Empresas;
