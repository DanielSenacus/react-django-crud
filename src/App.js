import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Sidebar, Navbar } from "./components";
import { Home, Empresas, Login, Users, Sedes } from "./pages";

import * as server from "./server";

const initialUser = { id: 1, name: "John", roles: "super" };

const App = () => {
  const [user, setUser] = useState(initialUser);
  const [auth, setAuth] = useState(false);
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

  useEffect(() => {
    getUserList();
  }, []);

  const logOut = () => {
    setUser(null);
    setAuth(false);
  };

  if (auth) {
    return (
      <>
        <Navbar logOut={logOut}></Navbar>
        <BrowserRouter>
          <Sidebar user={user}>
            <Routes>
              <Route path='/home' element={<Home user={user} />} />
              <Route
                path='/empresas'
                element={
                  <ProtectedRoute
                    redirectTo='/home'
                    isAllowed={!!auth && user.roles.includes("super")}
                  >
                    <Empresas />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/users'
                element={
                  <ProtectedRoute
                    redirectTo='/home'
                    isAllowed={!!auth && user.roles.includes("super")}
                  >
                    <Users usersList={usersList} />
                  </ProtectedRoute>
                }
              />
              <Route path='/empresas/sedes' element={<Sedes />} />
            </Routes>
          </Sidebar>
          <Routes>
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
  return <Login setAuth={setAuth} setUser={setUser}></Login>;
};

export default App;
