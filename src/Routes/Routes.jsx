import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import Error from "../Pages/Error";
import AppDetails from "../Pages/AppDetails";
import AppError from "../Pages/AppError";
import ErrorPage from "../Pages/ErrorPage";



const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayouts,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home,
                errorElement: <Error></Error>

                
            },
            
            {
                path: 'apps',
                Component: Apps,
                errorElement: <Error></Error>
            },
            {
                path: 'installation',
                Component: Installation,
                errorElement: <Error></Error>
            },
            {
                path: '/app/:id',
                Component: AppDetails,
                errorElement: <AppError></AppError>
                
            }
        ]
    },
   
])

export default router;
