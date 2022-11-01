import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import UserCard from "../../components/UserCard/UserCard";
import * as server from "../../server";
import "./Users.scss";

const Users = () => {
  const [usersList, setUsersList] = useState([]);

  const getUserList = async () => {
    try {
      const res = await server.listUsers();
      const data = await res.json();
      console.log(data);
      setUsersList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await server.DeleteUser(id);
      const data = res.json();
      console.log(data);
      getUserList();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <section className=''>
      <div className='title'>
        <h1>Usuarios</h1>
      </div>
      <div className='users_section'>
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>funcion</th>
              <th>Empresa</th>
              <th>Dirección</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Localidad</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.roles}</td>
                <td>{user.company}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.location}</td>
                <td>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className='btn btn-primary btn-danger'
                  >
                    Eliminar
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

export default Users;
