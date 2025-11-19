import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import Error from "../Pages/Error";



const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayouts,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                Component: Home,
                
            },
            
            {
                path: 'apps',
                Component: Apps
            },
            {
                path: 'installation',
                Component: Installation
            },
            // {
            //     path: '/product/:id',
            //     Component: 
            // }
        ]
    },
   
])

export default router;
