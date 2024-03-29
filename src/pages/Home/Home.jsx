import React, { useState } from "react";
import "./Home.scss";
import UserModal from "../../components/UserModal/UserModal";
import CompanyModal from "../../components/CompanyModal/CompanyModal";
import EmployeeModal from "../../components/EmployeeModal/EmployeeModal";

const Home = ({ user }) => {
  const { name, company } = user;
  const [createuser, setCreateUser] = useState(false);
  const [createCompany, setCreateCompany] = useState(false);
  const [createEmployee, setCreateEmployee] = useState(false);

  const userRol = () => {
    if (user.roles == "super") return "Super Admnistrador";
    else if (user.roles == "admin") return "Administrador";
    else if (user.roles == "employee") return "Empleado";
  };

  if (createuser) {
    return <UserModal setCreateUser={setCreateUser} />;
  }

  if (createCompany) {
    return <CompanyModal setCreateCompany={setCreateCompany}></CompanyModal>;
  }

  if (createEmployee) {
    return (
      <EmployeeModal
        setCreateEmployee={setCreateEmployee}
        user={user}
      ></EmployeeModal>
    );
  }

  if (userRol() == "Empleado") {
    return (
      <main>
        <div className='frame'>
          <div className='center'>
            <div className='profile'>
              <div className='image'>
                <div className='circle-1'></div>
                <div className='circle-2'></div>
              </div>

              <div className='name'>{user.name}</div>
              <div className='job'>{user.company}</div>

              <div className='actions'>
                <button className='btn'>Ingresar</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (userRol() == "Administrador") {
    return (
      <main>
        <div className='title'>
          <h1>
            Bienvenido {name} | Usuario {userRol()} de {company}
          </h1>
        </div>
        <div id='root'>
          <div className='container pt-5'>
            <div className='row align-items-stretch'>
              <div className='c-dashboardInfo col-lg-3 col-md-6'>
                <div className='wrap'>
                  <h4 className='heading heading5 hind-font medium-font-weight c-dashboardInfo__title'>
                    Crear Empleado
                  </h4>
                  <button
                    onClick={() => setCreateEmployee(true)}
                    className='hover-1'
                  >
                    CREAR
                  </button>
                </div>
              </div>
              <div className='c-dashboardInfo col-lg-3 col-md-6'>
                <div className='wrap'>
                  <h4 className='heading heading5 hind-font medium-font-weight c-dashboardInfo__title'>
                    Gestionar puntos de acceso
                  </h4>
                  <button
                    onClick={() => setCreateCompany(true)}
                    className='hover-2'
                  >
                    Gestionar
                  </button>
                </div>
              </div>
              <div className='c-dashboardInfo col-lg-3 col-md-6'></div>
              <div className='c-dashboardInfo col-lg-3 col-md-6'></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className='title'>
        <h1>
          Bienvenido {name} | Usuario {userRol()}
        </h1>
      </div>
      <div id='root'>
        <div className='container pt-5'>
          <div className='row align-items-stretch'>
            <div className='c-dashboardInfo col-lg-3 col-md-6'>
              <div className='wrap'>
                <h4 className='heading heading5 hind-font medium-font-weight c-dashboardInfo__title'>
                  Crear Administrador
                  <svg
                    className='MuiSvgIcon-root-19'
                    focusable='false'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    role='presentation'
                  >
                    <path fill='none' d='M0 0h24v24H0z'></path>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'></path>
                  </svg>
                </h4>
                <button onClick={() => setCreateUser(true)} className='hover-1'>
                  CREAR
                </button>
              </div>
            </div>
            <div className='c-dashboardInfo col-lg-3 col-md-6'>
              <div className='wrap'>
                <h4 className='heading heading5 hind-font medium-font-weight c-dashboardInfo__title'>
                  Crear Empresa
                  <svg
                    className='MuiSvgIcon-root-19'
                    focusable='false'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    role='presentation'
                  >
                    <path fill='none' d='M0 0h24v24H0z'></path>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'></path>
                  </svg>
                </h4>
                <button
                  onClick={() => setCreateCompany(true)}
                  className='hover-2'
                >
                  CREAR
                </button>
              </div>
            </div>
            <div className='c-dashboardInfo col-lg-3 col-md-6'></div>
            <div className='c-dashboardInfo col-lg-3 col-md-6'></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
