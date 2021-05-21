
import Vue from 'vue'
import VueRouter from 'vue-router'
import { enchance } from './permission';

Vue.use(VueRouter);

//import App from '@/App.vue';
// import Login from '@/login/index.vue';
// import Dashboard from '@/dashboard/index';

const routes = [
    { path: '/', exact: true, redirect: '/login' },
    { name: 'loginfsdafsfd', path: '/loginfsdafsfd123', component: () => import('@/login/index.vue') },
    { name: 'login', path: '/login', component: () => import('@/login/index.vue') },
    {
       
        path: '/dashboard', component: () => import('@/dashboard/index.vue'),
        children: [
            {  name:'dashboard-index', path: '/dashboard', exact: true, redirect: '/dashboard/module1' },
            { path: '/dashboard/module1', component: () => import('@/dashboard/module1/index.vue') },
            { path: '/dashboard/module2', component: () => import('@/dashboard/module2/index.vue') }
        ]
    },
    { path: '*', component: () => import('@/404/index.vue') }
]

const router = new VueRouter({
    mode: 'hash',
    routes: routes
});

//启用权限
enchance(router);

export default router;


