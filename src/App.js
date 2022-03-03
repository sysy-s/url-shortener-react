import Default from "./pages/Default";
import Premium from "./pages/Premium";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Stats from "./pages/Stats";

import { RequireToken } from "./components/user/Auth";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

const AuthApi = React.createContext();

function App() {
  const [auth, setAuth] = useState();

  return (
    <AuthApi.Provider value={{ auth, setAuth }}>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route
          path="/premium"
          element={
            <RequireToken>
              <Premium />
            </RequireToken>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/stats"
          element={
            <RequireToken>
              <Stats />
            </RequireToken>
          }
        />
      </Routes>
    </AuthApi.Provider>
  );
}

export default App;
