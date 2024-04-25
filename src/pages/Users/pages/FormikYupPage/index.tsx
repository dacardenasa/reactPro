import { useFormik } from "formik";
import * as Yup from "yup";

import "@styles/styles.css";

export const FormikYupPage = () => {
  const { errors, touched, getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: ""
    },
    onSubmit: (values) => console.info({ values }),
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
      email: Yup.string().email("must be a valid email").required("Required")
    })
  });

  return (
    <div>
      <h1>FormikYupPage</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          title="firstName"
          {...getFieldProps("firstName")}
          className={touched.firstName && errors.firstName ? "has-error" : ""}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          title="lastName"
          {...getFieldProps("lastName")}
          className={touched.lastName && errors.lastName ? "has-error" : ""}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          title="email"
          {...getFieldProps("email")}
          className={touched.email && errors.email ? "has-error" : ""}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
