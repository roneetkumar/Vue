import Vue from 'vue'
import Router from 'vue-router'

import Login from "@/components/login-page/LoginCard";
import Lea from '@/components/lea-page/lea-page'
import Mio from '@/components/mio-page/mio-page'
import News from "@/components/news-page/news-page";
import Service from "@/components/service-page/service-page";
import About from "@/components/about-page/about-page";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/lea',
            name: 'Lea',
            component: Lea
        },
        {
            path: '/mio',
            name: 'Mio',
            component: Mio
        }, {
            path: '/news',
            name: 'News',
            component: News
        }, {
            path: '/service',
            name: 'Services',
            component: Service
        }, {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})