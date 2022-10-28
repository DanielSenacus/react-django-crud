import React, { useEffect, useState } from "react";
import UserCard from "../../components/UserCard/UserCard";
import "./Users.scss";

const Users = ({ usersList }) => {
  return (
    <section className=''>
      <div className='title'>
        <h1>Usuarios</h1>
        <button>Crear usuario</button>
      </div>
      <div className='users_section'>
        <div className='row'>
          {usersList.map((user, id) => (
            <div className='col-md-4' key={id}>
              <UserCard user={user} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Users;
