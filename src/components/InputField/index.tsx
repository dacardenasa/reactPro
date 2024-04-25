import { ErrorMessage, useField } from "formik";

type InputFieldProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
};

export const InputField = ({ label, ...props }: InputFieldProps) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props?.id ?? props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
