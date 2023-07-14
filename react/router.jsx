import {createBrowserRouter, Navigate} from 'react-router-dom';
import Login from "./src/views/Login";
import Signup from "./src/views/Signup";
import Users from "./src/views/Users";
import NotFound from "./src/views/NotFound";
import DefaultLayout from "./src/components/DefaultLayout";
import GuestLayout from "./src/components/GuestLayout";
import Dashboard from "./src/views/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/users' />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ],
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/login',
                element: <Login />
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />
    },
]);

export default router;
