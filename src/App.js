import Default from "./pages/Default";
import Premium from "./pages/Premium";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Stats from "./pages/Stats";
import Layout from "./components/layout/Layout";
import { AuthProvider } from "./components/user/Auth";


import { RequireToken, NoToken } from "./components/user/Auth";
import { Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <AuthProvider>
      <Layout>
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
          <Route
            path="/register"
            element={
              <NoToken>
                <Register />
              </NoToken>
            }
          />
          <Route
            path="/login"
            element={
              <NoToken>
                <Login />
              </NoToken>
            }
          />
          <Route
            path="/stats"
            element={
              <RequireToken>
                <Stats />
              </RequireToken>
            }
          />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
