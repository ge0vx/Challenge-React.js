import LogIn from "../pages/LogIn";
import Profile from "../pages/Profile";
import Search from "../pages/Search";

import {FC} from "react";

interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'login-route',
        title: 'Log In',
        path: '/',
        enabled: true,
        component: LogIn
    },
    {
        key: 'search-route',
        title: 'Search',
        path: '/search',
        enabled: true,
        component: Search
    },
    {
        key: 'profile-route',
        title: 'Profile',
        path: '/profile',
        enabled: true,
        component: Profile
    }
]