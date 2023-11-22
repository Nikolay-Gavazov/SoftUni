import { useContext, useEffect } from "react";
import { logout } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/authContext";

const Logout = () => {
    const navigate = useNavigate();
    const {logoutHandler } = useContext(AuthContext);
    useEffect(() => {
        logout()
        .then(() => {
        logoutHandler()
        navigate('/')})
        .catch(() => navigate('/'));
    },[]);
};

export default Logout;