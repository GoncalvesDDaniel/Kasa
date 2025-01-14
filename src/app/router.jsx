import { createBrowserRouter } from "react-router";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import App from "../App.jsx";
import Layout from "../Layout.jsx";

export let router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);
