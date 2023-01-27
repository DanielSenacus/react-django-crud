import React, { useState } from "react";
import LoginLogo from "../../assets/loginLogo.png";
import * as server from "../../server";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.scss";

const initialUser = { id: 1, name: "John Doe", roles: "super" };

const Login = ({ setUser, setAuth }) => {
  const [body, setBody] = useState({ email: "", password: "" });

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({ ...body, [name]: value });
  };

  const guestLogin = () => {
    setUser(initialUser);
    setAuth(true);
  };
  const onSubmit = async (body) => {
    try {
      const res = await server.checkAccount(body);
      const data = await res.json();
      console.log(data);
      if (data.auth == false) {
        return console.log("false");
      }

      setUser(data.user[0]);
      setAuth(data.auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='login'>
      <div className='h-100 container-fluid'>
        <div className='h-100 row d-flex justify-content-center align-items-center '>
          <div className='col-md-9 col-lg-6 col-xl-5'>
            <img src={LoginLogo} className='img-fluid' />
          </div>
          <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1'>
            <form>
              {/* Email */}
              <div className='form-outline mb-4'>
                <input
                  type='email'
                  id='form3Example3'
                  className='form-control form-control-lg'
                  placeholder='Enter a valid email address'
                  value={body.email}
                  onChange={inputChange}
                  name='email'
                />
                <label className='form-label'>Email address</label>
              </div>
              {/* Password */}
              <div className='form-outline mb-3'>
                <input
                  type='password'
                  id='form3Example4'
                  className='form-control form-control-lg'
                  placeholder='Enter password'
                  value={body.password}
                  onChange={inputChange}
                  name='password'
                />
                <label className='form-label'>Password</label>
              </div>

              <div className='text-center text-lg-center mt-4 pt-2'>
                <button
                  onClick={() => onSubmit(body)}
                  type='button'
                  className='btn btn-primary btn-lg'
                  style={{
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                  }}
                >
                  Login
                </button>
              </div>
              <button onClick={guestLogin} className='btn btn-secondary btn-lg'>
                Enter as guest
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary'></div>
    </section>
  );
};

export default Login;
