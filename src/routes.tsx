import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home";
import { Rockets } from "./pages/rockets";

function InternalPages() {

  return useRoutes([

    {
      children: [

        {
          path: "/",
          element: < HomePage />,
        },
        {
          path: "/rockets",
          element: < Rockets />,
        }
      ],
    },
  ]);
}

export default InternalPages;
