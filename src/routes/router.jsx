import { createBrowserRouter } from "react-router";
import Header from "../components/Header";

const router = createBrowserRouter(

    [

    {
        path: "/",
        element: <Header></Header>
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