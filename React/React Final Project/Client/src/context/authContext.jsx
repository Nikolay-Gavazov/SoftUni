import { createContext } from "react";
import usePersistedState from "../hooks/usePersistedState";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = usePersistedState("auth", {});
  const navigate = useNavigate();

  const loginSubmitHandler = async (data) => {
    const result = await login(data.email, data.password);
    setAuth(result);
    localStorage.setItem("accessToken", result.accsessToken);
    navigate("/");
  };

  const registerSubmitHandler = async (data) => {
    const result = await register(data.email, data.password);
    setAuth(result);
    localStorage.setItem("accessToken", result.accsessToken);
    navigate("/");
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accsessToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
