import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToy from "../Pages/MyToy/MyToy";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ViewDettails from "../Pages/ViewDettails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/alltoy',
                element: <AllToys></AllToys>
            },
            {
                path: '/addtoy',
                element: <PrivetRoute><AddToy></AddToy></PrivetRoute>
            },
            {
                path:'/mytoy',
                element:<PrivetRoute><MyToy></MyToy></PrivetRoute>
            },
            {
                path:'/viewDetails',
                element:<PrivetRoute><ViewDettails></ViewDettails></PrivetRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;