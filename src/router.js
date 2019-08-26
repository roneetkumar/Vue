import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "firebase/app";
import "firebase/auth";

import * as Modules from "./module";


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
            component: Modules.Login,
        },
        {
            path: '/home',
            name: 'Home',
            redirect: '/home/lea',
            component: Modules.Home,
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: 'lea',
                    name: 'Lea',
                    component: Modules.Lea,
                    redirect: '/home/lea/announcements',
                    meta: { requiresAuth: true },
                    children: [
                        {
                            path: 'announcements',
                            name: 'Announcements',
                            component: Modules.Announcements,
                            meta: { requiresAuth: true }
                        },
                        {
                            path: 'documents',
                            name: 'Documents',
                            component: Modules.Documents,
                            meta: { requiresAuth: true }
                        },
                        {
                            path: 'assignments',
                            name: 'Assignments',
                            component: Modules.Assignments,
                            meta: { requiresAuth: true }
                        },
                        {
                            path: 'grades',
                            name: 'Grades',
                            component: Modules.Grades,
                            meta: { requiresAuth: true }
                        },
                        {
                            path: 'events',
                            name: 'Events',
                            component: Modules.Events,
                            meta: { requiresAuth: true }
                        },
                        {
                            path: 'teachers',
                            name: 'Teachers',
                            component: Modules.Teachers,
                            meta: { requiresAuth: true }
                        },
                        {
                            path: 'websites',
                            name: 'Websites',
                            component: Modules.Websites,
                            meta: { requiresAuth: true }
                        },
                        {
                            path: 'absences',
                            name: 'Absences',
                            component: Modules.Absences,
                            meta: { requiresAuth: true }
                        },
                        {
                            path: 'forum',
                            name: 'Forum',
                            component: Modules.Forum,
                            meta: { requiresAuth: true }
                        }
                    ]
                },
                {
                    path: 'mio',
                    name: 'Mio',
                    component: Modules.Mio,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'news',
                    name: 'News',
                    component: Modules.News,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'service',
                    name: 'Services',
                    component: Modules.Service,
                    meta: { requiresAuth: true },
                },
            ]
        },
    ],
})

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !currentUser) next('login');
    else if (!requiresAuth && currentUser) next('home');
    else next();
});

export default router;