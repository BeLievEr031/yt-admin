import { createBrowserRouter } from "react-router-dom";
import Root from "./Layouts/Root";
import Dashboard from "./Layouts/Dashboard";
import Users from "./pages/Users/Users";
import NonAuth from "./Layouts/NonAuth";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        children: [
          {
            path: "users",
            element: <Users />,
          },
        ],
      },

      {
        path: "/auth",
        element: <NonAuth />,
        children: [
          {
            path: "/auth/signup",
            element: <Signup />,
          },
          {
            path: "/auth/login",
            element: <Login />,
          },
        ],
      },
    ],
  },
]);

export default router;
