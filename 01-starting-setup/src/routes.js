import { createBrowserRouter } from "react-router-dom";
import MainNavigate from "./labs/mainNavigate.jsx";
import { Lab2 } from "./labs/index.js";
import Expenses from "./labs/lab2/lab2.8/index.js";
import Lab05 from "./labs/Lab05/index.js";
import Lab7 from "./labs/Lab 7.1 (Resource)/index.jsx";
import Lab9 from "./labs/Lab 9.1 (Resource)/Lab9.jsx";
import Lab10 from "./labs/Lab 10.1 (Stater)/Lab10.jsx";
import Lab11 from "./labs/Lab 11.1 (Resource)/Lab11.jsx";
import Lab12 from "./labs/Lab 12.1 (Resource)/Lab12.jsx";
import Lab13 from "./labs/Lab 13.1 (Resource)/Lab13.jsx";
import Lab14 from "./labs/Lab 14.1 (Resource)/Lab14.jsx";
import Lab15 from "./labs/Lab15/Lab15.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigate />,
    children: [
      {
        index: true,
        element: <Lab2 />,
      },
      {
        path: "exp",
        element: <Expenses />,
      },
      {
        path: "lab5",
        element: <Lab05 />,
      },
      {
        path: "lab7",
        element: <Lab7 />,
      },
      {
        path: "lab9",
        element: <Lab9 />,
      },
      {
        path: "lab10",
        element: <Lab10 />,
      },
      {
        path: "lab11",
        element: <Lab11 />,
      },
      {
        path: "lab12",
        element: <Lab12 />,
      },
      {
        path: "lab13",
        element: <Lab13 />,
      },
      {
        path: "lab14",
        element: <Lab14 />,
      },
      {
        path: "lab15",
        element: <Lab15 />,
      },
    ],
  },
  {
    path: "*",
    element: <h3>Not Found</h3>,
  },
]);

export default router;
