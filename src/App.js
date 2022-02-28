import Default from "./pages/Default";
import Premium from "./pages/Premium";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Stats from "./pages/Stats";

import { RequireToken } from "./components/user/Auth";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
