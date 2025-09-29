import { createBrowserRouter } from "react-router";
import Header from "../components/Header";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter(

    [

    {
        path: "/",
        element: <HomeLayout></HomeLayout>
    },
    {
        path: "/auth",
        element: <h2>authentication layout</h2>
    },
    {
        path: "/news",
        element: <h2>news layout</h2>
    },
    {
        path: "/*",
        element: <h2>Error 404</h2>
    }
]
)

export default router;