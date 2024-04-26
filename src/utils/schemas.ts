import * as Yup from "yup";

export const registerFormSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(10, "Must be 10 characters or less")
    .required("Required"),
  email: Yup.string().email("must be a valid email").required("Required"),
  terms: Yup.boolean().oneOf([true], "Must accept terms and conditions"),
  jobType: Yup.string().required("Requerido")
});

export const registerUserFormSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must have 2 characters minimum")
    .max(15, "Name must have 15 characters maximum")
    .required("required"),
  email: Yup.string().email("Email format is not valid").required("required"),
  password: Yup.string()
    .min(6, "Password must have 6 characters minimum")
    .required("required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must be the same")
    .required("required")
});
