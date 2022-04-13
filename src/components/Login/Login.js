import { useFormik } from "formik";
import Input from "../../common/Input";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/loginService";
import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { useAuth, useAuthActions } from "../../Provider/AuthProvider";
import { useQuery } from "../../hooks/useQuery";
import "./login.css";

const Login = ({ history }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const setAuth = useAuthActions();
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  const auth = useAuth();
  useEffect(() => {
    if (auth) {
      history.push(redirect);
    }
  }, [redirect, auth]);
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const { data } = await loginUser(values);
        setErrorMessage(null);
        setAuth(data);
        localStorage.setItem("authState", JSON.stringify(data));
        history.push("/");
      } catch (error) {
        if (error.response && error.response.data.message) {
          setErrorMessage(error.response.data.message);
        }
      }
    },
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="LoginFormContainer">
      <form onSubmit={formik.handleSubmit}>
        <Input name="email" type="email" formik={formik} label="Email" />
        <Input
          name="password"
          type="password"
          formik={formik}
          label="Password"
        />
        <button
          className="btn primary"
          type="submit"
          disabled={!formik.isValid}
          style={{ width: "100%" }}
        >
          Login
        </button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <Link to={`/signup?redirect=${redirect}`}>
          <p style={{ marginTop: "15px" }}>not signup yet ?</p>
        </Link>
      </form>
    </div>
  );
};

export default withRouter(Login);
