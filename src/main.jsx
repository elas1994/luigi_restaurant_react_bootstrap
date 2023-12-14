import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const router123 = createBrowserRouter([
  {
    path: "/luigi_restaurant_react_bootstrap/",
    element: <App />,
    children: [
      {
        path: "/luigi_restaurant_react_bootstrap/",
        element: <Home />,
      },
      {
        path: "/luigi_restaurant_react_bootstrap/menu",
        element: <Menu />,
      },
      {
        path: "/luigi_restaurant_react_bootstrap/about",
        element: <About />,
      },
      {
        path: "/luigi_restaurant_react_bootstrap/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router123} />
  </React.StrictMode>
);
