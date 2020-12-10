import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import { Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { authUser, fetchUsers } from "../../redux/user/userAction";
import "./login.css";

import * as yup from "yup";
export default function Login() {
    // Selecting user from redux i.e. {users,data}
    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch();

    if (user) {
        return <Redirect to="/Dashboard" />;
    }

    const validationSchema = yup.object({
        email: yup
            .string("Enter your email")
            .email("Enter a valid email")
            .required("Email is required"),
        username: yup
            .string("Enter your Username")
            .min(8, "Username should be of minimum 8 characters length")
            .required("Username is required"),
    });
    return (
        <div className="login">
            <div className="login__container">
                <h1 className="heading">Login</h1>

                <Formik
                    initialValues={{ email: "sdf@gmilc.om", username: "Bret" }}
                    // validate={validationSchema}
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = "Required";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                            )
                        ) {
                            errors.email = "Invalid email address";
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log("hello");
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
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                label="Email"
                                value={values.email}
                                onChange={handleChange}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                            />
                            {errors.email && touched.email && errors.email}

                            <TextField
                                fullWidth
                                id="username"
                                name="username"
                                label="User Name"
                                value={values.username}
                                onChange={handleChange}
                                error={
                                    touched.username && Boolean(errors.username)
                                }
                                helperText={touched.username && errors.username}
                            />
                            {errors.username &&
                                touched.username &&
                                errors.username}

                            <Button
                                color="primary"
                                variant="contained"
                                fullWidth
                                type="submit"
                            >
                                Submit
                            </Button>

                            {/* For testing */}
                            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
