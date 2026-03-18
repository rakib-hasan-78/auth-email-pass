
import Root from './../../Pages/Root/Root';
import Home from './../../Pages/Home/Home';
import About from '../../Pages/Signup/Signup';
import Products from '../../Pages/Login/Login';

const rootRoutes = {
    path: '/',
    Component: Root,
    children: [

        {
            index: true,
            Component: Home,
        },

        {
            path:'/signup',
            Component: About
        },

        {
            path:'/login',
            Component: Products,
        }
    ]
}
export default rootRoutes;