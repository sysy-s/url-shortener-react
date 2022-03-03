import { useLocation, Navigate } from "react-router-dom";

export const setToken = (token) => {
  localStorage.setItem("jwt-token", token); // make up your own token
};

export const fetchToken = () => {
  return localStorage.getItem("jwt-token");
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
