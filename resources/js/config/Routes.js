import {
    Route,
    Routes
} from  'react-router-dom';
import {Clientes, Compras, Home, Ventas} from '../pages'
import HomeLayout from '../layout/HomeLayout';
import React, {Fragment, lazy } from 'react';

const routes = [
    {
        path: '/',
        exact: true,
        layout: HomeLayout,
        component: Home,
    }, 
    {
        path: '/compras',
        layout: HomeLayout,
        exact: true,
        component: Compras,
    },
    {
        path: '/ventas',
        exact: true,
        component: Ventas,
    },
    {
        path: '/clientes',
        layout: HomeLayout,
        exact: true,
        component: Clientes,
    },
];
  
const CfgRoutes = () => {
    return (
        <Routes>
            {routes.map((route, i) => {
                const Layout = route.layout || Fragment;
                const Component = route.component;
                return (
                    <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        element={
                            <Layout>
                                <Component />
                            </Layout>
                        }
                    >
                    </Route>
                );
            })}
        </Routes>
    );
};
export default CfgRoutes;