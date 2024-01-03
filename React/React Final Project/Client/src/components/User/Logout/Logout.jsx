import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/authContext";

const Logout = () => {
  const navigate = useNavigate();
  const { logoutHandler } = useContext(AuthContext);

  useEffect(() => {
    logoutHandler();
    navigate("/");
  });
};
export default Logout;
