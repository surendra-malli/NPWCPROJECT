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
import ListAllExercisePlan from './Admin/AdminDiet/ListtAllExercisePlan';

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
import CreateDietPlanNut from './Admin/AdminDiet/components/CreateDietPlanNut'
// ----------------------------------------------------------------------

import CreateInstantExercisePlan from './Admin/AdminDiet/components/CreateInstantExercisePlan';

// --------help center---
import HelpCenter from './Admin/HelpCenter/HelpCenter';
import GetStarted from "./Admin/HelpCenter/GetStarted";
import PrivacyPolicy from "./Admin/HelpCenter/PrivacyPolicy";
import TermConditions from "./Admin/HelpCenter/TermConditions"

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
                },
                {
                    path: 'createdietplannut',
                    element: < CreateDietPlanNut / >
                },
                {
                    path:'listallexerciseplan',
                    element:<ListAllExercisePlan />
                },
                 {
                    path:'createinstantexerciseplan',
                    element:<CreateInstantExercisePlan />
                }
                ,
                 {
                    path:'helpcenter',
                    element:< HelpCenter/>
                },

                 {
                    path:'helpcenter/getstarted',
                    element:<GetStarted />
                },
                 {
                    path:'helpcenter/privacypolicy',
                    element:< PrivacyPolicy/>
                },
                 {
                    path:'helpcenter/termconditions',
                    element:<TermConditions/>
                },

                
                
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