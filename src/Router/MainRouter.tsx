import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/LayoutHolder/Layout";
import HomeScreen from "../Pages/HomeScreens/HomeScreen";

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
]);
