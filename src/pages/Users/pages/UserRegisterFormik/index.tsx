import { Formik, Form } from "formik";

import { InputField } from "@/components";
import { registerUserFormSchema } from "@/utils";

import "@styles/styles.css";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
};

export const UserRegisterFormik = () => {
  return (
    <>
      <h1>User Register Formik</h1>
      <Formik
        initialValues={initialState}
        onSubmit={(values) => console.info({ values })}
        validationSchema={registerUserFormSchema}
      >
        {({ handleReset }) => (
          <Form>
            <InputField label="Name" name="name" placeholder="Type your name" />
            <InputField
              label="Email"
              name="email"
              placeholder="Type your email"
              type="email"
            />
            <InputField
              label="Password"
              name="password"
              placeholder="Type your password"
              type="password"
            />
            <InputField
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm your password"
              type="password"
            />
            <button type="submit" title="submit">
              Create Account
            </button>
            <button type="button" title="reset" onClick={handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
