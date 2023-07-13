import { createBrowserRouter } from "react-router-dom";
import Register from '../pages/Register'
import Main from "../layouts/Main";
import SignIn from "../pages/Signin";
import Index from "../pages/Index";
import Welcome from "../pages/NotAllow"
import ProtectedRoute from "./ProtectedRoute"
import Mangas from "../pages/Mangas";
import FormManga from "../pages/createMangas";
import ProtectedSignIn from "./ProtectedSignIn"



const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children: [
            {
                path:'/',
                element: <Index/>
            },
            {
                path: '/mangas',
                element: <Mangas/>
            }
        ]
    },
    {
        path:'/register',
        element: (
            <ProtectedRoute>
            <Register />
            </ProtectedRoute>
        )
    },
    {
        path:'/signin',
        element: (
        <ProtectedSignIn>
        <SignIn/>
        </ProtectedSignIn>
        )
    },
    {
        path:'/NotAllow',
        element: <Welcome />
    },
    {
        path:'/form-manga',
        element:<FormManga/>
    }
])

export default router