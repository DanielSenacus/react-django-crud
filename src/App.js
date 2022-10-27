import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Sidebar, Navbar } from "./components";
import { Home, Empresas, Login, Users, Sedes } from "./pages";

const initialUser = { id: 1, name: "John", roles: "admin" };

const App = () => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState("user");

  const login = async () => {
    await setUser({
      id: 1,
      name: "John",
      roles: "admin",
    });
    await setUserRole(user.roles);
  };

  // useEffect(() => {
  //   login();
  // }, []);

  const logout = () => setUser(null);

  if (!user) {
    return <Login></Login>;
  }

  return (
    <>
      <Navbar setUserRole={setUserRole}></Navbar>
      <BrowserRouter>
        <Sidebar userRole={userRole}>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route
              path='/empresas'
              element={
                <ProtectedRoute
                  redirectTo='/home'
                  isAllowed={!!user && user.roles.includes("super")}
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
                  isAllowed={!!user && user.roles.includes("super")}
                >
                  <Users />
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
};

export default App;
