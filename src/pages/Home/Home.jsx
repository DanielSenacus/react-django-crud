import React, { useState } from "react";
import "./Home.scss";
import userLogo from "../../assets/add_user.png";
import UserModal from "../../components/UserModal/UserModal";

const Home = ({ user }) => {
    const { name } = user;
    const [createuser, setCreateUser] = useState(false);

    const userRol = () => {
        if (user.roles == "super") return "Super Admnistrador";
        else if (user.roles == "admin") return "Administrador";
        else return "Empleado";
    };

    if (createuser) {
        return <UserModal setCreateUser={setCreateUser} />;
    }

    return (
        <main>
            <div className='title'>
                <h1>
                    Bienvenido {name} | Usuario {userRol()}{" "}
                </h1>
            </div>
            <div className='container mx-auto mt-4'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='card'>
                            <img
                                src={userLogo}
                                className='card-img-top'
                                alt='...'
                            />
                            <div className='card-body'>
                                <h5 className='card-title'>
                                    Crear Administrador
                                </h5>

                                <p className='card-text'>
                                    Crear Usuario o Admnistrador de una Empresa
                                </p>
                                <a href='#' className='btn-card mr-2'>
                                    <button onClick={() => setCreateUser(true)}>
                                        Crear
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
