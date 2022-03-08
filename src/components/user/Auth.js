import { createContext, useReducer } from "react";
import { useLocation, Navigate } from "react-router-dom";

export const setToken = async (token) => {
  localStorage.setItem("jwt-token", token); // make up your own token
};

export const fetchToken = () => {
  const token = localStorage.getItem("jwt-token");
  return token;
};

export const removeToken = () => {
  return localStorage.removeItem("jwt-token");
};

export function RequireToken({ children }) {
  let auth = fetchToken();
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export function NoToken({ children }) {
  let auth = fetchToken();
  let location = useLocation();

  if (auth) {
    return <Navigate to="/premium" state={{ from: location }} />;
  }

  return children;
}

// Creates context for all components to change depending on if user is logged in or not
// example: header displays logout option if user is logged

export const AuthContext = createContext(Boolean(fetchToken()));

export const AuthProvider = ({ children }) => {
  const [logged, dispatch] = useReducer((logged, action) => {
    switch (action.type) {
      case "login":
        return { logged: true };
      case "logout":
        return { logged: false };
      default:
        return logged;
    }
  }, Boolean(fetchToken()));

  return (
    <AuthContext.Provider value={[logged, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};
