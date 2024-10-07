import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import NotFound from "../../components/Shared/NotFound/NotFound";
import Home from "../../components/Home/Home/Home";
import AboutMe from "../../pages/AboutMe/AboutMe";
import Services from "../../pages/Services/Services";

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
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
