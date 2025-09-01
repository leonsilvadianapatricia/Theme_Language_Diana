import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { I18nRouterProvider } from "./context/I18nRouterContext.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Curriculum from "./pages/Curriculum.jsx";

const router = createBrowserRouter([
  {
    path: "/:lang?",
    element: (
      <ThemeProvider>
        <I18nRouterProvider>
          <App />
        </I18nRouterProvider>
      </ThemeProvider>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "curriculum", element: <Curriculum /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
