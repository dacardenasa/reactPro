import { FormikErrors, useFormik } from "formik";

import "@styles/styles.css";
import { isValidEmail } from "@/utils";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

export const FormikBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!firstName) {
      errors.firstName = "required";
    }
    if (firstName.length >= 15) {
      errors.firstName = "Must be 15 characters or less";
    }
    if (!lastName) {
      errors.lastName = "required";
    }
    if (lastName.length >= 10) {
      errors.lastName = "Must be 10 characters or less";
    }
    if (!email) {
      errors.email = "required";
    }
    if (!isValidEmail(email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  const { errors, values, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: ""
      },
      onSubmit: (values) => console.info({ values }),
      validate
    });

  return (
    <div>
      <h1>FormikBasicPage</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          name="firstName"
          title="firstName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
          className={touched.firstName && errors.firstName ? "has-error" : ""}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          name="lastName"
          title="lastName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
          className={touched.lastName && errors.lastName ? "has-error" : ""}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          title="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          className={touched.email && errors.email ? "has-error" : ""}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
