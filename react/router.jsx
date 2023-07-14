import { createBrowserRouter } from 'react-router-dom';
import Login from "./src/views/Login";
import Signup from "./src/views/Signup";
import Users from "./src/views/Users";
import NotFound from "./src/views/NotFound";

const router = createBrowserRouter([
    {
        path: '/login',
        element: < Login />
    },
    {
        path: '/signup',
        element: < Signup />
    },
    {
        path: '/users',
        element: < Users />
    },
    {
        path: '*',
        element: < NotFound />
    },
]);

export default router;
