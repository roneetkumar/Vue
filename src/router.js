import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "firebase/app";
import "firebase/auth";

import Login from "@/components/login-page/LoginCard";
import Lea from '@/components/lea-page/lea-page'
import Mio from '@/components/mio-page/mio-page'
import News from "@/components/news-page/news-page";
import Service from "@/components/service-page/service-page";
import About from "@/components/about-page/about-page";
import Home from "@/components/home-page";
import CreateAccount from "@/components/login-page/create-account";

Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/login'
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/CreateAccount',
            name: 'CreateAccount',
            component: CreateAccount
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                requireAuth: true
            },
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

    ],
})


router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) next('/');
    else if (!requiresAuth && currentUser) next('home');
    else next();
});


export default router;