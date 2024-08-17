import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// React Query Imports
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <App />
    </QueryClientProvider>
  </StrictMode>
);
