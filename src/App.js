import Default from "./pages/Default";
import Premium from "./pages/Premium";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Stats from "./pages/Stats";

import { fetchToken, RequireToken } from "./components/user/Auth";

import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout token={fetchToken}>
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
    </Layout>
  );
}

export default App;
