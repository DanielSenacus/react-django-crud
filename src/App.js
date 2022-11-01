import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Sidebar, Navbar } from "./components";
import { Home, Empresas, Login, Users, Sedes } from "./pages";
import QrPage from "./pages/qrPage/QrPage";

import * as server from "./server";

const initialUser = { id: 1, name: "John", roles: "super" };

const setToken = (authToken) => {
  sessionStorage.setItem("token", JSON.stringify(authToken));
};

const App = () => {
  const [user, setUser] = useState(initialUser);
  const [auth, setAuth] = useState(false);

  //   useEffect(() => {
  //     getUserList();
  //   }, [setUsersList]);

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
                    <Users />
                  </ProtectedRoute>
                }
              />
              <Route path='/empresas/sedes' element={<Sedes />} />
            </Routes>
            <Routes>
              <Route path='/code' element={<QrPage />} />
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
