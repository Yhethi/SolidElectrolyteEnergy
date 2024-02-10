import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  Navigate
} from "react-router-dom";
import { UniverseApp } from "./UniverseApp.jsx";
import { EventosApp } from "./EventosApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/ElNexo" element={<UniverseApp />} /> */}
        {/* <Route path="/Eventos" element={<EventosApp />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
