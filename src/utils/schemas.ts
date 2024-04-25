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
