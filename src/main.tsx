// import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
  // </StrictMode>
);
