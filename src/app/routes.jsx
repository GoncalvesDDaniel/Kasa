import React from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Products from "./pages/Products";
import App from "../App";
import NotFound from "./pages/NotFound.jsx";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router";

export const routes = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products/:productsId?" element={<Products />} />
            <Route path="*" element={<NotFound />} />
        </Route>,
    ])
);
