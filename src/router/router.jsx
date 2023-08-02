import { createBrowserRouter } from "react-router-dom";
import Register from '../pages/Register'
import Main from "../layouts/Main";
import SignIn from '../pages/Signin'
import Index from "../pages/Index";
import Welcome from "../pages/NotAllow"

import { ProtectedRoute, ProtectedRouteMangaDetail, ProtectedRouteMangas, ProtectedAdminPanel, ProtectedRouteNewRole} from "./ProtectedRoute"
import ProtectedSignIn from "./ProtectedSignIn";
import FormManga from "../pages/createMangas";
import Mangas from "../pages/Mangas";
import MangaDetail from "../pages/MangaDetail";
import Newrole from "../pages/New-role";
import AdminPanel from "../pages/AdminPanel";
import UnderConstruction from "../pages/UnderConstruction";
import Chapter from "../pages/Chapter";


import Donate from "../components/Donate";




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

                path:'/mangas',
                element: (
                    <ProtectedRouteMangas>
                    <Mangas />
                    </ProtectedRouteMangas> 
                )
            },
            {
                path:'/manga/:id',
                element: (
                    <ProtectedRouteMangaDetail>
                    <MangaDetail />
                    </ProtectedRouteMangaDetail>
                )
            },
            {
                path: '/Chapter/:id',
                element: <Chapter/>
            },
            {
                path:'/NotAllow',
                element: <Welcome />
            },
            {
                path:'/signin',
                element: (
                    <ProtectedSignIn>
                    <SignIn />
                    </ProtectedSignIn>
                )
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
                path: "/manga-form",
                element: <FormManga />,
            },
            {
                path: "/new-role",
                element:(
                    <ProtectedRouteNewRole>
                         <Newrole/>
                    </ProtectedRouteNewRole>
                )
            },
            {
                path: "/adminPanel",
                element: <AdminPanel/>
            },

            {
                path:"/donate",
                element: <Donate/>
            }


        ],
        
    },
    {
        path: "/underConstruction",
        element: <UnderConstruction/>
    },

])

export default router