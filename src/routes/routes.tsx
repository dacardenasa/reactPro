import { Navigate, createBrowserRouter } from "react-router-dom";
import { LazyAbout, LazyHome, LazyRoot, LazyTerms, LazyUsers } from "./imports";
import {
  DynamicForm,
  FormikAbstract,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  UserRegister,
  UserRegisterFormik,
  UsersForm,
  UsersList
} from "@/pages/Users/pages";

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
            path: "/users/registerForm",
            element: <UserRegister />
          },
          {
            path: "/users/formikBasicPage",
            element: <FormikBasicPage />
          },
          {
            path: "/users/formikYupPage",
            element: <FormikYupPage />
          },
          {
            path: "/users/formikComponents",
            element: <FormikComponents />
          },
          {
            path: "/users/formikAbstract",
            element: <FormikAbstract />
          },
          {
            path: "/users/UserRegisterFormik",
            element: <UserRegisterFormik />
          },
          {
            path: "/users/DynamicForm",
            element: <DynamicForm />
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
