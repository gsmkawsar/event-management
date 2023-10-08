import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import MainLayout from "../components/Layout/MainLayout";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Login from "../Page/Login/Login";
import Registration from "../Page/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Descriptions from "../components/Home/Description/Descriptions";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Registration></Registration>,
            },
            {
                path: "/contact",
                element: <PrivateRoute><Registration></Registration></PrivateRoute>,
            },
            {
                path: "/description:id",
                element: <PrivateRoute><Descriptions/></PrivateRoute>,
                loader: ()=> fetch('/data.json')
            },
        ]
    },

]);

export default router;