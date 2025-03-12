import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/dashboard",
                // element: <Sidebar />,
            },
        ],
    },
    {
        path: "*",  // Catch-all route for 404
        element: <PageNotFound />,
    }
]);

export default router;
