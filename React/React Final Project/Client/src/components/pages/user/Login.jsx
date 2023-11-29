import { useContext, useMemo } from "react";
import AuthContext from "../../../context/authContext";
import useForm from "../../../hooks/useForm";
import styles from "./Form.module.css"
import { Link } from "react-router-dom";

const Login = () => {
  const {loginSubmitHandler} = useContext(AuthContext);
  const initValue = useMemo(() => ({email: "", password:""}), []);
  const {formValue, onSubmit, onChange} = useForm(initValue, loginSubmitHandler);

  return (
    <div className={styles.form}>
      <div className="col-lg-4 col-12 mb-5">
        <h2 className="tm-text-primary mb-5" style={{textAlign: "center"}}>Login Page</h2>
        <form id="contact-form" className="tm-contact-form mx-auto" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="email"
              value={formValue.email}
              onChange={onChange}
              className="form-control rounded-0"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formValue.password}
              onChange={onChange}
              className="form-control rounded-0"
              placeholder="Password"
            />
          </div>
          <div className="form-group tm-text-right" style={{display: "flex", justifyContent: "center"}}>
            <button type="submit" className="btn btn-primary" >
              Login
            </button>
          </div>
          <p className={styles.paragraph}>
            <span className={styles.field}>
              You don't have profile? Click <Link to="/register" className={styles.link}>Register</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
