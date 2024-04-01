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
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
