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
        {!userName.trim().length && <span>This field is required!</span>}
        <input
          className={!isValidEmail(userEmail) ? "has-error" : ""}
          name="userEmail"
          onChange={(e) => handleChangeField("userEmail", e.target.value)}
          placeholder="Type your email"
          type="email"
          value={userEmail}
        />
        {!isValidEmail(userEmail) && <span>This email is not valid!</span>}
        <input
          name="password"
          onChange={(e) => handleChangeField("password", e.target.value)}
          placeholder="Type your password"
          type="password"
          value={password}
        />
        {!password.trim().length && <span>This field is required!</span>}
        {password.trim().length > 0 && password.trim().length < 6 && (
          <span>This password must have six characters minimum!</span>
        )}
        <input
          name="passwordConfirm"
          onChange={(e) => handleChangeField("passwordConfirm", e.target.value)}
          placeholder="Confirm your password"
          type="password"
          value={passwordConfirm}
        />
        {!passwordConfirm.trim().length && (
          <span>This field is required!</span>
        )}
        {passwordConfirm.trim().length > 0 && password !== passwordConfirm && (
          <span>The passwords must be the same!</span>
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
