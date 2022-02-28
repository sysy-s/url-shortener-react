import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  
  let auth = fetchToken();


  if (!auth) {
    navigate('/login');
  }

  return children;
}

