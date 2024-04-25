import { NavLink, Outlet } from "react-router-dom";

export default function Users() {
  return (
    <div>
      <h1>Users Page</h1>
      <ul>
        <li>
          <NavLink to={"/users/usersList"}>Users List</NavLink>
        </li>
        <li>
          <NavLink to={"/users/usersForm"}>User Form</NavLink>
        </li>
        <li>
          <NavLink to={"/users/registerForm"}>Register User</NavLink>
        </li>
        <li>
          <NavLink to={"/users/formikBasicPage"}>Formik Basic Page</NavLink>
        </li>
        <li>
          <NavLink to={"/users/formikYupPage"}>Formik Yup Page</NavLink>
        </li>
        <li>
          <NavLink to={"/users/formikComponents"}>Formik Components Page</NavLink>
        </li>
        <li>
          <NavLink to={"/users/formikAbstract"}>Formik Abstract Page</NavLink>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
