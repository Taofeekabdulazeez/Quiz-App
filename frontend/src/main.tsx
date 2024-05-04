import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import "./global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppThemeProvider } from "./contexts/AppThemeContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
