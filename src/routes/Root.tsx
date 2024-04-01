import { NavLink, Outlet } from "react-router-dom";
import styles from "./root.module.css";

export default function Root() {
  return (
    <>
      <div className={styles["main-layout"]}>
        <nav>
          <img src={"/vite.svg"} title={"vite"} className={styles["icon"]} />
          <ul>
            <li>
              <NavLink
                to={"Home"}
                className={({ isActive }) =>
                  isActive ? styles["nav-active"] : ""
                }
              >
                Home Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"about"}
                className={({ isActive }) =>
                  isActive ? styles["nav-active"] : ""
                }
              >
                About Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"terms"}
                className={({ isActive }) =>
                  isActive ? styles["nav-active"] : ""
                }
              >
                Terms Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"users"}
                className={({ isActive }) =>
                  isActive ? styles["nav-active"] : ""
                }
              >
                Users Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"shopping"}
                className={({ isActive }) =>
                  isActive ? styles["nav-active"] : ""
                }
              >
                Shopping Page
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles["detail"]}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
