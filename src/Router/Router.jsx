import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import MainLayout from "../components/Layout/MainLayout";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Login from "../Page/Login/Login";
import Registration from "../Page/Registration/Registration";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Registration></Registration>,
            }
        ]
    },

]);

export default router;