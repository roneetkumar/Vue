import Login from "@/components/login-page/LoginCard";
import Lea from '@/components/lea-page/lea-page'
import Mio from '@/components/mio-page/mio-page'
import News from "@/components/news-page/news-page";
import Service from "@/components/service-page/service-page";
import About from "@/components/about-page/about-page";
import Home from "@/components/home-page";

export const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [

            {
                path: '/home/lea',
                name: 'Lea',
                component: Lea
            },
            {
                path: '/home/mio',
                name: 'Mio',
                component: Mio
            },
            {
                path: '/home/news',
                name: 'News',
                component: News
            },
            {
                path: '/home/service',
                name: 'Services',
                component: Service
            },
            {
                path: '/home/about',
                name: 'About',
                component: About
            }
        ]
    },

]