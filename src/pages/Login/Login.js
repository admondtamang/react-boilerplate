import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import { Formik } from "formik";
import React from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { authUser, fetchUsers } from "../../redux/user/userAction";
import "./login.css";

export default function Login() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (user) {
    return <Redirect to="/Dashboard" />;
  }

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="heading">Login</h1>

        <Formik
          initialValues={{ email: "sdf@gmilc.om", username: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(fetchUsers(values));
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                className="styledInput"
                placeholder="Email"
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                type="username"
                placeholder="Username"
                name="username"
                className="styledInput"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              {errors.username && touched.username && errors.username}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>

              <pre>{JSON.stringify(values, null, 2)}</pre>
              {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
            </form>
          )}
        </Formik>
      </div>
      {/* 
        <h1 className="heading">Login</h1>
        <TextField label="User name" variant="outlined" />
        <TextField label="Password" variant="outlined" />

        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button> */}
      {/* </div> */}
    </div>
  );
}
