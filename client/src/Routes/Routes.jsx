import { createBrowserRouter } from "react-router-dom";
import {
  Blog,
  Contact,
  Home,
  Login,
  NotFound,
  Signup,
  ViewRecipe,
} from "../Pages";
import Main from "../Layout/Main";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/view-recipe/:id",
        element: (
          <ProtectedRoute>
            <ViewRecipe />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
