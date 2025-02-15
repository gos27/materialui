import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ThemeProviderWrapper } from "./ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProviderWrapper>
      <RouterProvider router={router} />
    </ThemeProviderWrapper>
  </React.StrictMode>
);
