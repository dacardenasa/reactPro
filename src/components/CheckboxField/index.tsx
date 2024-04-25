import { ErrorMessage, useField } from "formik";

type CheckboxFieldProps = {
  label: string;
  name: string;
  [x: string]: any;
};

export const CheckboxField = ({ label, ...props }: CheckboxFieldProps) => {
  const [field] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label>
        {" "}
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
