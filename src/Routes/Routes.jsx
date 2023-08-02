import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/AboutUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToy from "../Pages/MyToy/MyToy";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ViewDettails from "../Pages/ViewDettails";
import PhotGallery from "../Pages/Home/PhotoGallery/PhotGallery";
import ContactUs from "../Pages/Home/ExtraSection/ContactUs";
import SingleData from "../SingleData";

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
            },
            {
                path:'/photogallery',
                element:<PhotGallery></PhotGallery>
            },
            {
                path:'contact',
                element:<ContactUs></ContactUs>
            },
            {
                path: '/singleData/:id',
                element:<PrivetRoute><SingleData></SingleData></PrivetRoute> ,
                loader: ({params}) => fetch(`http://localhost:5000/alltoy/${params.id}`)
              },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;