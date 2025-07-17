import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routing from "./routing/Routing.config";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <Routing />
  </StrictMode>
);
