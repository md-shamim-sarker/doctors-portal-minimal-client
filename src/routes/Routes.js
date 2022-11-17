import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About/About";
import Appointment from "../pages/Appointment/Appointment/Appointment";
import ContactUs from "../pages/ContactUs/ContactUs";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Reviews from "../pages/Reviews/Reviews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/appointment",
                element: <Appointment></Appointment>
            },
            {
                path: "/reviews",
                element: <Reviews></Reviews>
            },
            {
                path: "/contactUs",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
]);

export default router;