import { ErrorMessage, useField } from "formik";

type SelectFieldProps = {
  label: string;
  name: string;
  [x: string]: any;
};

export const SelectField = ({ label, ...props }: SelectFieldProps) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props?.id ?? props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
