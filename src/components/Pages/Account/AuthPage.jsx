import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchemaSignup = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const validationSchemaLogin = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const AuthPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 5 }}>
        <Tabs
          value={tabIndex}
          onChange={(e, newIndex) => setTabIndex(newIndex)}
          centered
        >
          <Tab label="Login" />
          <Tab label="Signup" />
        </Tabs>

        {tabIndex === 0 ? (
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchemaLogin}
            onSubmit={(values) => console.log("Login Data:", values)}
          >
            {({ errors, touched }) => (
              <Form>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    mt: 2,
                  }}
                >
                  <Field
                    as={TextField}
                    name="email"
                    label="Email"
                    fullWidth
                    error={errors.email && touched.email}
                    helperText={touched.email && errors.email}
                  />
                  <Field
                    as={TextField}
                    type="password"
                    name="password"
                    label="Password"
                    fullWidth
                    error={errors.password && touched.password}
                    helperText={touched.password && errors.password}
                  />
                  <Button type="submit" variant="contained" color="primary">
                    Login
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        ) : (
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchemaSignup}
            onSubmit={(values) => console.log("Signup Data:", values)}
          >
            {({ errors, touched }) => (
              <Form>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    mt: 2,
                  }}
                >
                  <Field
                    as={TextField}
                    name="name"
                    label="Name"
                    fullWidth
                    error={errors.name && touched.name}
                    helperText={touched.name && errors.name}
                  />
                  <Field
                    as={TextField}
                    name="email"
                    label="Email"
                    fullWidth
                    error={errors.email && touched.email}
                    helperText={touched.email && errors.email}
                  />
                  <Field
                    as={TextField}
                    type="password"
                    name="password"
                    label="Password"
                    fullWidth
                    error={errors.password && touched.password}
                    helperText={touched.password && errors.password}
                  />
                  <Field
                    as={TextField}
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    fullWidth
                    error={errors.confirmPassword && touched.confirmPassword}
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                  />
                  <Button type="submit" variant="contained" color="primary">
                    Signup
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        )}
      </Paper>
    </Container>
  );
};

export default AuthPage;
