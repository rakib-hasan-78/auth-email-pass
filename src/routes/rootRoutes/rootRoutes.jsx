
import Root from './../../Pages/Root/Root';
import Home from './../../Pages/Home/Home';
import About from './../../Pages/About/About';
import Products from './../../Pages/Products/Products';

const rootRoutes = {
    path: '/',
    Component: Root,
    children: [

        {
            index: true,
            Component: Home,
        },

        {
            path:'/about',
            Component: About
        },

        {
            path:'/products',
            Component: Products,
        }
    ]
}
export default rootRoutes;