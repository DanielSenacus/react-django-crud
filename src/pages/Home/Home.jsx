import React from "react";

const Home = ({ user }) => {
  const { name } = user;
  return (
    <main>
      <div className='title'>
        <h1>Bienvenido {name}</h1>
      </div>
    </main>
  );
};

export default Home;
