import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./views/RootView";
import "./app.css";
import Register from "./views/RegisterView";
import Landing from "./views/LandingView";
import RegisteredPlayers from "./views/RegisteredPlayersView";
import Login from "./views/LoginView";
import Profile from "./views/ProfileView";
import Matches from "./views/MatchesView";
import Match from "./views/MatchView";
import Chat from "./views/ChatView";
import CaseOpening from "./views/CaseOpening";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Landing />,
      },
      { path: "/opening", element: <CaseOpening /> },
      {
        path: "/players",
        element: <RegisteredPlayers />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/matches",
        element: <Matches />,
      },
      {
        path: "/match/:id",
        element: <Match />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
