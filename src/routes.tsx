import { createBrowserRouter } from "react-router-dom";

import React from "react";

import TodoList from "./Page/To-Do-List/TodoList";
import ManegeUser from "./Page/ManegeUser/ManegeUser";

import HomePage from "./Page/Homepage/HomePage";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
    // errorElement: <ErrPopup />,
  },
  {
    path: "/to-do-list",
    element: <TodoList />,
    // errorElement: <ErrPopup />,
  },
  {
    path: "/manageUser",
    element: <ManegeUser />,
    // errorElement: <ErrPopup />,
  },
]);
