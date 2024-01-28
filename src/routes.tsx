import { Outlet, useRoutes, Navigate } from "react-router-dom";
import HomePage from "./pages/home";
import InfoPage from "./pages/info";
import { DescriptionPage } from "./pages/description";
import { SettingPage } from "./pages/settings";
import { UserManagements } from "./pages/usermanagmeants";
import { SocialMedia } from "./pages/socialmedia";
import { PaymentGetway } from "./pages/paymentgetway";
import { SyllabusPage } from "./pages/syllabus";

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
        { path: "/description", element: <DescriptionPage /> },
        {
          path: "/description/:id",
          element: <DescriptionPage />,
        },
        {
          path: "/settings",
          element: <SettingPage />,
        },
        {
          path: "/usersmanagements",
          element: <UserManagements />,
        },
        {
          path: "/socialmedias",
          element: <SocialMedia />,
        },
        {
          path: "/paymentgateways",
          element: <PaymentGetway />,
        },
        {
          path: "/syllabus",
          element: <SyllabusPage />,
        },
        {
          path: "/syllabus/:id",
          element: <SyllabusPage />,
        },
        {
          path: "/description/:id",
          element: <DescriptionPage />,
        },
      ],
    },
    {
      element: <ProtectedRoutes />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/info/:id", element: <InfoPage /> },

        { path: "/description", element: <DescriptionPage /> },
        {
          path: "/description/:id",
          element: <DescriptionPage />,
        },
        {
          path: "/settings",
          element: <SettingPage />,
        },
        {
          path: "/usersmanagements",
          element: <UserManagements />,
        },
        {
          path: "/socialmedias",
          element: <SocialMedia />,
        },
        {
          path: "/paymentgateways",
          element: <PaymentGetway />,
        },
        {
          path: "/syllabus",
          element: <SyllabusPage />,
        },
        {
          path: "/syllabus/:id",
          element: <SyllabusPage />,
        },
        {
          path: "/description/:id",
          element: <DescriptionPage />,
        },
      ],
    },
  ]);
}

export default InternalPages;
