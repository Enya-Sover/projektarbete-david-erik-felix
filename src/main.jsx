import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { LoginContextProvider } from "./context/LoginContext.jsx";
import { CitatContextProvider } from "./context/CitatContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginContextProvider>
      <CitatContextProvider>
      <Router>
        <App />
      </Router>
      </CitatContextProvider>
    </LoginContextProvider>
  </StrictMode>
);
