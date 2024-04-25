import { Formik, Form } from "formik";

import { CheckboxField, InputField, SelectField } from "@/components";
import { registerFormSchema } from "@/utils";

import "@styles/styles.css";

export const FormikAbstract = () => {
  return (
    <div>
      <h1>FormikAbstract</h1>
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
            <InputField
              label="FirstName"
              name="firstName"
              placeholder="Type your name"
            />
            <InputField
              label="LastName"
              name="lastName"
              placeholder="Type your lastName"
            />
            <InputField
              label="Email"
              name="email"
              placeholder="Type your email"
              type="email"
            />
            <SelectField name="jobType" label="Job Type">
              <option value="">Pick Something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </SelectField>
            <CheckboxField label="Accept Terms and Conditions" name="terms" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
