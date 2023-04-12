// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => < SvgColor src = { `/assets/icons/navbar/${name}.svg` }
sx = {
    { width: 1, height: 1 }
}
/>;

const navConfig = [{
        title: 'dashboard',
        path: '/dashboard/app',
        icon: icon('ic_analytics'),
    },
    {
        title: 'Diet',
        path: '/dashboard/DietPlan',
        icon: icon('ic_user'),
    },
    {
        title: 'Exercise',
        path: '/dashboard/Exercise',
        icon: icon('ic_cart'),
    },

    {
        title: 'login',
        path: '/dashboard/login',
        icon: icon('ic_lock'),
    },

];

export default navConfig;