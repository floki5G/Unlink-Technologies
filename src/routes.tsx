import { Outlet, useRoutes, Navigate } from "react-router-dom";
import HomePage from "./pages/home";
import InfoPage from "./pages/info";
import { DescriptionPage } from "./pages/description";

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
        { path: "/info/:id", element: <InfoPage /> },
        { path: "/description", element: <DescriptionPage />}
      ],
    },
    {
      element: <ProtectedRoutes />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/description", element:  <DescriptionPage />}
      ],
    },
  ]);
}

export default InternalPages;
