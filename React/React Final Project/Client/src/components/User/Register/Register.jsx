import { useContext, useMemo, useState } from "react";
import AuthContext from "../../../context/authContext";
import useForm from "../../../hooks/useForm";
import styles from "../../../style/Form.module.css";
import { Link } from "react-router-dom";
import PageLoader from "../../Shared/PageLoader";

const Register = () => {
  const [errors, setErrors] = useState({});
  const {registerSubmitHandler, serverError, isLoading} = useContext(AuthContext);
  const initValue = useMemo(() => ({email: "", password:"", rePass: ""}), []);
  const {formValue, onSubmit, onChange} = useForm(initValue, registerSubmitHandler);
  
  const emailValidator = () => {
    const emailRegex = /^[a-zA-Z\.-]{2,}[0-9]*@[a-z]+\.[a-z]{2,}$/gm;
    if (!emailRegex.test(formValue.email)) {
      setErrors(state => ({
        ...state,
        email: 'Email is not valid. Please enter a valid email address',
      }));
    } else {
      if (errors.email) {
        setErrors(state => ({ ...state, email: '' }));
      }
    }
  };

  const passwordValidator = () => {
    if (formValue.password.length < 6) {
      setErrors(state => ({
        ...state,
        password: 'Password must be at least 6 characters',
      }));
    }else {
      if (errors.password) {
        setErrors(state => ({ ...state, password: '' }));
      }
    }
  };

  const repPassValidator =() => {
    if(formValue.password != formValue.rePass){
      setErrors(state => ({
        ...state,
        rePass: 'Password does not match with the Repeated Password',
      }));
    }else {
      if (errors.rePass) {
        setErrors(state => ({ ...state, rePass: '' }));
      }
    }
  };

  return (
    <div className={styles.form}>
      <div className="col-lg-4 col-12 mb-5">
      {isLoading && (<PageLoader/>)}
        <h2 className="tm-text-primary mb-5" style={{textAlign: "center"}}>Register Page</h2>
        <form
          id="contact-form"
          className="tm-contact-form mx-auto"
          onSubmit={onSubmit}
        >
          <div className="form-group">
            <input
              type="text"
              name="email"
              value={formValue.email}
              onChange={onChange}
              onBlur={emailValidator}
              className="form-control rounded-0"
              placeholder="Email"
            />
          </div>
          {errors.email && (
                    <p className={styles.errorMessage}>{errors.email}</p>
                  )}
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formValue.password}
              onChange={onChange}
              onBlur={passwordValidator}
              className="form-control rounded-0"
              placeholder="Password"
              required=""
            />
          </div>
          {errors.password && (
                    <p className={styles.errorMessage}>{errors.password}</p>
                  )}
          <div className="form-group">
            <input
              type="password"
              name="rePass"
              value={formValue.rePass}
              onChange={onChange}
              onBlur={repPassValidator}
              className="form-control rounded-0"
              placeholder="Repeat Password"
              required=""
            />
          </div>
          {errors.rePass && (
                    <p className={styles.errorMessage}>{errors.rePass}</p>
                  )}
          <div className="form-group tm-text-right" style={{display: "flex", justifyContent: "center"}}>
            <button type="submit" className="btn btn-primary" disabled={(Object.values(errors).some(x => x)
                      || (Object.values(formValue).some(x => x == '')))}>
              Register
            </button>
          </div>
          {serverError && (
                    <p className={styles.errorMessage}>{serverError}</p>
                  )}
          <p className={styles.paragraph}>
            <span className={styles.field}>
              You don't have profile? Click <Link to="/login" className={styles.link}>Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Register;
