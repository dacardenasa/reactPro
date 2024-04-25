import { Formik, Field, Form, ErrorMessage } from "formik";

import { registerFormSchema } from "@/utils";

import "@styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h1>FormikComponents</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: ""
        }}
        onSubmit={(values) => console.info({ values })}
        validationSchema={registerFormSchema}
      >
        {() => (
          <Form>
            <label htmlFor="firstName">FirstName</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">LastName</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Pick Something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              {" "}
              <Field name="terms" type="checkbox" /> Accept Terms and Conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
