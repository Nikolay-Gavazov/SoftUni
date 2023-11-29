import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/authContext";
import { logout } from "../../../services/userService";

const Logout = () =>{
    const navigate = useNavigate();
    const {logoutHandler} = useContext(AuthContext);

    useEffect(() => {
        logout()
        .then(() =>{
            logoutHandler()
            navigate('/')})
        .catch(() => navigate('/'));
        },[]);
};
export default Logout;
