import { createBrowserRouter } from "react-router-dom";
import Lab10 from "./labs/Lab 10.1 (Stater)/Lab10.jsx";
import Lab11 from "./labs/Lab 11.1 (Resource)/Lab11.jsx";
import Lab12 from "./labs/Lab 12.1 (Resource)/Lab12.jsx";
import Lab13 from "./labs/Lab 13.1 (Resource)/Lab13.jsx";
import Lab14 from "./labs/Lab 14.1 (Resource)/Lab14.jsx";
import Lab17 from "./labs/Lab 17.1 (Starter)/lab17.jsx";
import AllQuotes from "./labs/Lab 17.1 (Starter)/pages/AllQuotes.jsx";
import DetailQuote from "./labs/Lab 17.1 (Starter)/pages/DetailQuote.jsx";
import NewQuote from "./labs/Lab 17.1 (Starter)/pages/NewQuote.jsx";
import NotFound from "./labs/Lab 17.1 (Starter)/pages/NotFound.jsx";
import Lab7 from "./labs/Lab 7.1 (Resource)/index.jsx";
import Lab9 from "./labs/Lab 9.1 (Resource)/Lab9.jsx";
import Lab05 from "./labs/Lab05/index.js";
import Lab15 from "./labs/Lab15/Lab15.jsx";
import Lab16 from "./labs/Lab16/Lab16.jsx";
import Auth from "./labs/Lab16/counter/Auth.jsx";
import Counter from "./labs/Lab16/counter/Counter.jsx";
import { Lab2 } from "./labs/index.js";
import Expenses from "./labs/lab2/lab2.8/index.js";
import MainNavigate from "./labs/mainNavigate.jsx";
import Lab20 from "./labs/Lab 20.1 (Starter)/Lab20.jsx";
import HomePage from "./labs/Lab 20.1 (Starter)/pages/HomePage.js";
import AuthPage from "./labs/Lab 20.1 (Starter)/pages/AuthPage.js";
import UserProfile from "./labs/Lab 20.1 (Starter)/components/Profile/UserProfile.js";

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
      {
        path: "lab16",
        element: <Lab16 />,
        children: [
          { index: true, element: <Counter /> },
          { path: "login", element: <Auth /> },
        ],
      },
      {
        path: "lab17",
        element: <Lab17 />,

        children: [
          {
            path: "quotes",
            element: <AllQuotes />,
          },
          {
            path: "quotes/:quoteId",
            element: <DetailQuote />,
          },
          {
            path: "new-quote",
            element: <NewQuote />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
      {
        path: "lab20",
        element: <Lab20 />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "auth",
            element: <AuthPage />,
          },
          {
            path: "profile",
            element: <UserProfile />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <h3>Not Found</h3>,
  },
]);

export default router;
