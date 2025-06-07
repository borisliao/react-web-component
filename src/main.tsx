import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(
  document.getElementsByTagName(import.meta.env.VITE_npm_package_name)[0]
).render(
  <div id="root">
    <StrictMode>
      <App />
    </StrictMode>
  </div>
);
