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
// 
import Adminproteins from './Admin/AdminDiet/Adminproteins';
import Adminitems from './Admin/AdminDiet/Adminitems';
// import CreateDietItems from './Admin/AdminDiet/component/CreateDietItems';

import AdminExercises from './Admin/AdminExercise/AdminExercises';
import AdminAerobic from './Admin/AdminExercise/AdminAerobic';
import Createuser from './pages/Createuser';
import DietPlan from './pages/Diet/DietPlan';
import Exercise from './pages/Exercises/Exercise';
import Adminprofile from './Admin/AdminProfile/Adminprofile';
import Aerobic from './pages/Exercises/Aerobic';
import CreateExerciseItems from './Admin/AdminExercise/CreateExerciseItems';
import Userstats from './Admin/UserStats/Userstats';
import Adminsearch from './Admin/AdminSearch/Adminsearch'
import ListAllDietPlan from './Admin/AdminDiet/ListAllDietPlan';
import CreateInstantDietPlan from './Admin/AdminDiet/components/CreateInstantDietPlan';
// ----------------------------------------------------------------------




export default function Router() {
    const routes = useRoutes([
        {
            path: 'login',
            element: < LoginPage / > ,
        },
        {
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
                    path: 'adminuser',
                    element: <Adminuser  / >
                },
                {
                    path: 'adminproteins',
                    element: <Adminproteins  / >
                },
                {
                    path: 'adminuser',
                    element: < Adminuser / >
                },
                {
                    path: 'adminprofile',
                    element: < Adminprofile / >
                },

                {
                    path: 'userstats',
                    element: < Userstats / >
                },

                {
                    path: 'alldietplan',
                    element: < ListAllDietPlan / >
                },

                {
                    path: 'adminsearch',
                    element: < Adminsearch / >
                },
                {
                    path: 'createinstandietplan',
                    element: < CreateInstantDietPlan / >
                }
                
            ]

        },






        {
            element: < SimpleLayout / > ,
            children: [
                { element: < Navigate to = "/login" / > , index: true },
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