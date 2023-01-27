import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import UserCard from "../../components/UserCard/UserCard";
import * as server from "../../server";
import "./Users.scss";

const userData = [
  {
    id: "1",
    name: "Jhon",
    lastName: "Doe",
    roles: "admin",
    company: "Blacksmith Agency",
    address: "Carrera 33 A #32-96",
    email: "@blacksmith.agency",
    phone: "3008511491",
    location: "South B",
  },
  {
    id: "2",
    name: "Daniel",
    lastName: "Sanchez",
    roles: "admin",
    company: "Blacksmith Agency",
    address: "Carrera 42 #15-96",
    email: "@blacksmith.agency",
    phone: "3008511491",
    location: "South A",
  },
  {
    id: "3",
    name: "Emily",
    lastName: "Velandia",
    roles: "admin",
    company: "Maggia",
    address: "Carrera 42 #15-96",
    email: "maggiashop@business.com",
    phone: "31459716",
    location: "South A",
  },
  {
    id: "4",
    name: "Isabella",
    lastName: "Montero",
    roles: "admin",
    company: "Alicante",
    address: "Carrera 42 #15-96",
    email: "alicante@info.com",
    phone: "3198511491",
    location: "Center",
  },
  {
    id: "5",
    name: "Carlos",
    lastName: "Lucio",
    roles: "admin",
    company: "Lusio-Licores",
    address: "Calle 5 #12-16",
    email: "licoreslucio@contact.com",
    phone: "31514162",
    location: "North",
  },
];

const Users = () => {
  const [usersList, setUsersList] = useState(userData);

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
    // try {
    //   const res = await server.DeleteUser(id);
    //   const data = res.json();
    //   console.log(data);
    //   getUserList();
    // } catch (error) {
    //   console.log(error);
    // }

    const newList = usersList.filter((item) => item.id !== id);
    setUsersList(newList);
  };

  // useEffect(() => {
  //   getUserList();
  // }, []);

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
                    Eliminar Usuario
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
