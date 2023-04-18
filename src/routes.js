import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import Protein from './pages/Diet/Protein';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/Dashboard/DashboardAppPage';
import Adminuser from './pages/Adminuser';
import Adminuserlist from './pages/Adminuserlist';
import Adminproteins from './pages/Adminproteins';
import Adminitems from './pages/Adminitems';
import Createuser from './pages/Createuser';
import DietPlan from './pages/Diet/DietPlan';
import Exercise from './pages/Exercises/Exercise';

import Aerobic from './pages/Exercises/Aerobic';
// ----------------------------------------------------------------------

export default function Router() {
    const routes = useRoutes([{
            path: '/dashboard',
            element: < DashboardLayout / > ,
            children: [
                { element: < Navigate to = "/dashboard/app" / > , index: true },
                { path: 'app', element: < DashboardAppPage / > },
                { path: 'user', element: < UserPage / > },
                { path: 'products', element: < ProductsPage / > },
                {
                    path: 'protein',
                    element: < Protein / >
                },

                {
                    path: 'login',
                    element: < LoginPage / > ,
                },
                {
                    path: 'adminuser',
                    element: < Adminuser / >
                },
                {
                    path: 'adminuserlist',
                    element: < Adminuserlist / >
                },
                {
                    path: 'adminproteins',
                    element: < Adminproteins / >
                },
                {
                    path: 'adminitems',
                    element: < Adminitems / >
                },
                {
                    path: 'createuser',
                    element: < Createuser / >
                },
                {
                    path: 'dietplan',
                    element: < DietPlan / > ,
                },
                {
                    path: 'exercise',
                    element: < Exercise / > ,
                },
                { path: 'aerobic', element: < Aerobic / > }

            ],
        },


        {
            element: < SimpleLayout / > ,
            children: [
                { element: < Navigate to = "/dashboard/app" / > , index: true },
                { path: '404', element: < Page404 / > },
                { path: '*', element: < Navigate to = "/404" / > },
            ],
        },
        {
            path: '*',
            element: < Navigate to = "/404"
            replace / > ,
        },
    ]);

    return routes;
}