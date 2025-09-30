import { createBrowserRouter } from "react-router";
import Header from "../components/Header";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Pages/Home"
import CategoryNews from "../components/Pages/CategoryNews";

const router = createBrowserRouter(

    [

    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ()=> fetch("/public/news.json")
            },
        ]
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