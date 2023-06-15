// component
import SvgColor from '../../../components/svg-color';
 

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HomeIcon from '@mui/icons-material/Home';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
// ----------------------------------------------------------------------

const icon = (name) => < SvgColor src = { `/assets/icons/navbar/${name}.svg` }
sx = {
    { width: 1, height: 1 }
}
/>;

const navConfig = [{
        title: 'dashboard',
        path: '/dashboard/app',
        icon: <HomeIcon/>,
        id: 1,

    },
    {
        title: 'Diet',
        path: '/dashboard/DietPlan',
        icon:<LocalDiningIcon/> ,
        id: 1,

    },
    {
        title: 'Exercise',
        path: '/dashboard/Exercise',
        icon: <FitnessCenterIcon/>,
        id: 1,

    },

   
    {
        title: 'Dashboard',
        path: '/dashboardadmin/adminuser',
        // icon: icon('ic_lock'),
        icon: <HomeIcon/>,
        id: 0,



    },
    {
        title: 'Diet',
        path: '/dashboardadmin/Adminitems',
        // icon: icon('ic_cart'),
        icon:<LocalDiningIcon/> ,
        id: 0,

    },
    {
        title: 'Exercise',
        path: '/dashboardadmin/AdminExercise',
        // icon: icon('ic_cart'), 
        icon: <FitnessCenterIcon/>,
        id: 0,

    },
   



];

export default navConfig;