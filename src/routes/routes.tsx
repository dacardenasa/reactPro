import { Navigate, createBrowserRouter } from "react-router-dom";
import { LazyAbout, LazyHome, LazyRoot, LazyTerms, LazyUsers } from "./imports";
import UsersList from "@/pages/Users/pages/UsersList";
import UsersForm from "@/pages/Users/pages/UsersForm";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LazyRoot />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />
      },
      {
        path: "/home",
        element: <LazyHome />
      },
      {
        path: "/about",
        element: <LazyAbout />
      },
      {
        path: "/terms",
        element: <LazyTerms />
      },
      {
        path: "/users",
        element: <LazyUsers />,
        children: [
          {
            index: true,
            element: <Navigate to="/users/usersList" />
          },
          {
            path: "/users/usersList",
            element: <UsersList />
          },
          {
            path: "/users/usersForm",
            element: <UsersForm />
          },
          {
            path: "/users/*",
            element: <Navigate to={"/users/usersList"} replace />
          }
        ]
      },
      {
        path: "/*",
        element: <Navigate to={"Home"} replace />
      }
    ]
  }
]);
