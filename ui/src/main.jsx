import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";

import Root from "./routes/root"
import ErrorPage from "./error-page";
import RewriteText from "./routes/rewrite-text"
import Settings from "./routes/settings"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children:[
            {
                path: "setting",
                element: <Settings />,
                ErrorPage: <errorElement />,
            },
            {
                path: "rewrite",
                element: <RewriteText />,
                errorElement: <ErrorPage />,
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
        <RouterProvider router={router} />
        </React.StrictMode>
);
