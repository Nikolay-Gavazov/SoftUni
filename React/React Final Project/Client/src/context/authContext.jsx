import { createContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";
import { useNavigate } from "react-router-dom";
import { login, register } from "../services/userService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsloading] = useState(false);
  const [auth, setAuth] = usePersistedState("auth", {});
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const loginSubmitHandler = async (data) => {
    setIsloading(true);
    try {
      const result = await login(data.email, data.password);
      setAuth(result);
      localStorage.setItem("accessToken", result.token);
      navigate("/");
      setIsloading(false);
      setServerError("");
    } catch (error) {
      setServerError(error.message);
      setIsloading(false);
    }
  };

  const registerSubmitHandler = async (data) => {
    setIsloading(true);
    try {
      const result = await register(data.email, data.password);
      setAuth(result);
      localStorage.setItem("accessToken", result.token);
      navigate("/");
      setIsloading(false);
      setServerError("");
    } catch (error) {
      setServerError(error.message);
      setIsloading(false);
    }
  };

  const logoutHandler = () => {
    setIsloading(true);
    setAuth({});
    localStorage.removeItem("accessToken");
    navigate("/");
    setIsloading(false);
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.token,
    serverError,
    isLoading,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
