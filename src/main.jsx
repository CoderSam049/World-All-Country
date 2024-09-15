import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./Error-page.jsx";

import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";
import CountryDetails from "./CountryDetails.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home/>,
      },

      {
        path: "/:country",
        element: <CountryDetails/>,
      },
      {
        path: '/sam',
        element:  <Contact></Contact>
      }
  
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
