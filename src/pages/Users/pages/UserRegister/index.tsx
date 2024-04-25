import { useForm } from "@/hooks";
import { isValidEmail } from "@/utils";

import "@styles/styles.css";

export const UserRegister = () => {
  const {
    formData,
    password,
    passwordConfirm,
    userEmail,
    userName,
    handleChangeField,
    resetForm
  } = useForm({
    password: "",
    passwordConfirm: "",
    userEmail: "",
    userName: ""
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.info({ formData });
  };

  return (
    <>
      <h1>User Register</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          className={!userName.trim().length ? "has-error" : ""}
          name="userName"
          onChange={(e) => handleChangeField("userName", e.target.value)}
          placeholder="Type your name"
          type="text"
          value={userName}
        />
        {!userName.trim().length && <span>Este campo es obligatorio!</span>}
        <input
          className={!isValidEmail(userEmail) ? "has-error" : ""}
          name="userEmail"
          onChange={(e) => handleChangeField("userEmail", e.target.value)}
          placeholder="Type your email"
          type="email"
          value={userEmail}
        />
        {!isValidEmail(userEmail) && <span>Este email no es valido!</span>}
        <input
          name="password"
          onChange={(e) => handleChangeField("password", e.target.value)}
          placeholder="Type your password"
          type="password"
          value={password}
        />
        {!password.trim().length && <span>Este campo es obligatorio!</span>}
        {password.trim().length > 0 && password.trim().length < 6 && (
          <span>El password debe tener minimo 6 caracteres!</span>
        )}
        <input
          name="passwordConfirm"
          onChange={(e) => handleChangeField("passwordConfirm", e.target.value)}
          placeholder="Confirm your password"
          type="password"
          value={passwordConfirm}
        />
        {!passwordConfirm.trim().length && (
          <span>Este campo es obligatorio!</span>
        )}
        {passwordConfirm.trim().length > 0 && password !== passwordConfirm && (
          <span>Los passwords deben ser iguales!</span>
        )}
        <button type="submit" title="submit">
          Create Account
        </button>
        <button type="button" title="reset" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </>
  );
};
