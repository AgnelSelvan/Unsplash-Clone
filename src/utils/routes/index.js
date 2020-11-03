import React from 'react';
import Login from '../../screens/Login';
import Home from "../../screens/Home";
import Dashboard from "../../screens/Dashboard";
import Register from '../../screens/Register';

export default [
    {
        path: '/',
        exact: true,
        component: () => <Home />,
        protected: null,
    },
    {
        path: '/dashboard',
        exact: true,
        component: () => <Dashboard />,
        protected:'auth',
    },
    {
        path: '/login',
        exact: true,
        component: () => <Login />,
        protected: 'guest'
    },
    {
        path: '/join',
        exact: true,
        component: () => <Register />,
        protected: 'guest'
    }
]