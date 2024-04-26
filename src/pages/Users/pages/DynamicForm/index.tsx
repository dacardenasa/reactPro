import { Formik, Form } from "formik";
import * as Yup from "yup";

import { InputField, SelectField } from "@/components";
import { TextFieldTypes } from "@/interfaces";

import fields from "@data/custom-form.json";

const getInitialStateDinamically = () => {
  const initialState: { [key: string]: unknown } = {};
  fields.forEach((field) =>
    Object.assign(initialState, { [field.name]: field.value })
  );
  return initialState;
};

const getRequiredFields = () => {
  if (
    fields.every(
      (field) => !Object.prototype.hasOwnProperty.call(field, "validations")
    )
  )
    return;

  const requiredFields: { [key: string]: any } = {};
  const fieldsWithValidations = fields.filter((field) =>
    Object.prototype.hasOwnProperty.call(field, "validations")
  );
  let schema = Yup.string();
  fieldsWithValidations.forEach((fieldWithVal) => {
    fieldWithVal.validations?.map((validation) => {
      if (validation.type === "required") {
        schema = schema.required(`${fieldWithVal.name} is required`);
      }
      if (validation.type === "minLength") {
        schema = schema.min(
          (validation as any).value ?? 2,
          `${fieldWithVal.name} must have at least ${
            (validation as any).value ?? 2
          } characters`
        );
      }
      if (validation.type === "email") {
        schema = schema.email("Email format is not valid");
      }
    });
    requiredFields[fieldWithVal.name] = schema;
  });
  return Yup.object({ ...requiredFields });
};

export const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={getInitialStateDinamically()}
        validationSchema={getRequiredFields()}
        onSubmit={(values) => console.info({ values })}
      >
        {() => (
          <Form noValidate>
            {fields.map(({ label, name, placeholder, type, options }) => {
              if (type === "select") {
                return (
                  <SelectField key={name} {...{ name, label }}>
                    <option value="">Pick Something</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </SelectField>
                );
              }
              return (
                <InputField
                  key={name}
                  {...{
                    name,
                    label,
                    placeholder,
                    type: type as TextFieldTypes
                  }}
                />
              );
            })}
            <button type="submit" title="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
