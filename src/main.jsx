import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, Outlet } from "react-router";
import "./App.css";
import App from "./App.jsx";
import { router } from "./app/router.jsx";
// import routes from "./app/routes.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
        {/* <App /> */}
        {/* <Outlet /> */}
    </StrictMode>
);
