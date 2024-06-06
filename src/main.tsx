import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import { RouterProvider } from "react-router-dom";
import "virtual:uno.css";
import "./styles/index.css";
import router from "./router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/queryClient";


export function Fallback() {
  return <p>Performing initial data load</p>;
}

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <PrimeReactProvider>
     {/* Provide the client to the App */}
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}  />
      </QueryClientProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);
