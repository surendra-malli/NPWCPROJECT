import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard/DashboardLayout';
import DashboardAdmin from './layouts/dashboard/DashboardAdmin';
import SimpleLayout from './layouts/simple';
//
import Protein from './pages/Diet/Protein';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/Dashboard/DashboardAppPage';
import Adminuser from './Admin/AdminDashboard/Adminuser';
import Adminuserlist from './Admin/AdminDashboard/Adminuserlist'; 
import Adminproteins from './Admin/AdminDiet/Adminproteins';
import Adminitems from './Admin/AdminDiet/Adminitems';
import AdminExercises from './Admin/AdminExercise/AdminExercises';
import AdminAerobic from './Admin/AdminExercise/AdminAerobic';
// import CreateExerciseItems from './Admin/AdminExercise/CreateExerciseItems';
import Createuser from './pages/Createuser';
import DietPlan from './pages/Diet/DietPlan';
import Exercise from './pages/Exercises/Exercise';

import Aerobic from './pages/Exercises/Aerobic';
import CreateExerciseItems from './Admin/AdminExercise/CreateExerciseItems';
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
                { path: 'aerobic', element: < Aerobic / > },


            ],
        },
        {
            path: '/dashboardadmin',
            element: < DashboardAdmin/> ,
            children: [
                { element: < Navigate to = "/dashboardadmin/app" / > , index: true },
                { path: 'login', element: < LoginPage / > },
                { path: 'adminitems', element: < Adminitems / > },
                { path: 'adminexercise', element: < AdminExercises / > },
                {
                    path: 'adminaerobic',
                    element: <AdminAerobic  / >
                },
                {
                    path: 'createexerciseitems',
                    element: <CreateExerciseItems / >
                },
                {
                    path: 'adminuser',
                    element: < Adminuser / >
                },
            ]

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