import { useContext, useMemo } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../context/authContext";
import { Link } from "react-router-dom";

const Register = () => {
    const { registerSubmitHandler } = useContext(AuthContext);
    const initValue = useMemo(() =>({ email: "", username: "", password: "", rePass: ""}));

    const { formValue, onSubmit, onChange } = useForm(initValue,registerSubmitHandler);

    

    return(
      <section id="register-page" className="content auth">
      <form id="register" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo" />
          <h1>Register</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="maria@email.com"
            value={formValue.email}
            onChange={onChange}
          />
          <label htmlFor="email">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Ivan1"
            value={formValue.username}
            onChange={onChange}
          />
          <label htmlFor="pass">Password:</label>
          <input type="password" name="password" id="register-password" value={formValue.password}
            onChange={onChange} />
          <label htmlFor="con-pass">Confirm Password:</label>
          <input type="password" name="rePass" id="confirm-password" value={formValue.rePass}
            onChange={onChange} />
          <input className="btn submit" type="submit" defaultValue="Register" />
          <p className="field">
            <span>
              If you already have profile click <Link to="/login">here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
    );
};

export default Register;