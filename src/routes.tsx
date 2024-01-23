import { Outlet, useRoutes, Navigate } from "react-router-dom";
import HomePage from "./pages/home";
import InfoPage from "./pages/info";

function InternalPages() {
  const ProtectedRoutes = () => {
    const token = true;

    return token ? <Outlet /> : <Navigate to="/login" />;
  };

  return useRoutes([
    {
      element: <ProtectedRoutes />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/info", element: <InfoPage /> },
      ],
    },
    {
      element: <ProtectedRoutes />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/info", element: <InfoPage /> },
      ],
    },
  ]);
}

export default InternalPages;
