import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";

//styles
import "virtual:uno.css";
import "./styles/index.scss";

//react query
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/queryClient";

//generouted react router
import { Routes } from "@generouted/react-router";


export function Fallback() {
  return <p>Performing initial daReactDOM.createR</p>;
}

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <PrimeReactProvider>
      {/* Provide the client to the App */}
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </PrimeReactProvider>
  </React.StrictMode>,
);
