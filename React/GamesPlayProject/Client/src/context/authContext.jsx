import { createContext } from "react";
import { login, register } from "../services/userService";
import usePersistedState from "../hooks/usePersistedState";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    const [auth, setAuth] = usePersistedState("auth",{});
    const navigate = useNavigate();
     
      const loginSubmitHandler = async (data) => {
        const result = await login( data.email, data.password );
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate('/');
      };
    
      const registerSubmitHandler = async (data) => {
        const result = await register( data.email, data.username, data.password );
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate('/');
      };
      const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
        navigate('/');
      };
    
      const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken
      }

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;