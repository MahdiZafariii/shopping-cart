import { useFormik } from "formik";
import Input from "../../common/Input";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { signupUser } from "../../services/signupService";
import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { useAuth, useAuthActions } from "../../Provider/AuthProvider";
import { useQuery } from "../../hooks/useQuery";

const Signup = ({ history }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .required("phone Number is required")
      .matches(/^[0-9]{11}$/, "Invalid phone number ")
      .nullable(),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    passwordConfirm: Yup.string()
      .required("")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  const setAuth = useAuthActions();
  const [errorMessage, setErrorMessage] = useState(null);
  const auth = useAuth();
  useEffect(() => {
    if (auth) {
      history.push("/checkout");
    }
  }, [redirect, auth]);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
    },
    onSubmit: async (values) => {
      const { name, email, phoneNumber, password } = values;
      const userData = {
        name,
        email,
        phoneNumber,
        password,
      };
      try {
        const { data } = await signupUser(userData);
        setAuth(data);
        // localStorage.setItem("authState", JSON.stringify(data));
        history.push(redirect);
        setErrorMessage(null);
      } catch (error) {
        setErrorMessage(error.response.data.message);
      }
    },
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="LoginFormContainer">
      <form onSubmit={formik.handleSubmit}>
        <Input name="name" formik={formik} label="Name" />
        <Input name="email" type="email" formik={formik} label="Email" />
        <Input
          name="phoneNumber"
          type="tel"
          formik={formik}
          label="Phone Number"
        />
        <Input
          name="password"
          type="password"
          formik={formik}
          label="Password"
        />
        <Input
          name="passwordConfirm"
          type="password"
          formik={formik}
          label="Confirm Password"
        />
        <button
          className="btn primary"
          type="submit"
          disabled={!formik.isValid}
          style={{ width: "100%" }}
        >
          Submit
        </button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <Link to={`/login?redirect=${redirect}`}>
          <p style={{ marginTop: "15px" }}>Already Login ?</p>
        </Link>
      </form>
    </div>
  );
};

export default withRouter(Signup);
