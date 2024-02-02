import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/LayoutHolder/Layout";
import HomeScreen from "../Pages/HomeScreens/HomeScreen";
import Login from "../Pages/Login";
import Register from "../Pages/register";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
