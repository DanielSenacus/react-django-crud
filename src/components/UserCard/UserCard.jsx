import React from "react";
import "./UserCard.scss";
import url from "../../assets/guest-user.jpg";
const UserCard = ({ user }) => {
  const { name, lastName, roles, email, location, phone, company, address } =
    user;
  return (
    <div
      id='usercard'
      className='card text-center bg-dark animate__animated animate__fadeInUp'
    >
      <div className='overflow'></div>
      <div className='card-body text-light'>
        <h4 className='card-title'>{`${name} ${lastName}`}</h4>
        <p className='card-text flex-start text-secondary'>{`Empresa:${company}
            Email:${email}
             Telefono:${phone}
             Ubicacion:${location}
             `}</p>
        <a
          target='_blank'
          className='btn btn-outline-secondary border-0'
          rel='noreferrer'
        >
          Go to {name}
        </a>
      </div>
    </div>
  );
};

export default UserCard;
