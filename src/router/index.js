
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//import App from '@/App.vue';
// import Login from '@/login/index.vue';
// import Dashboard from '@/dashboard/index';

const routes = [
    { path: '/', exact: true, redirect: '/login' },
    { path: '/login', component: () => import('@/login/index.vue') },
    {
        path: '/dashboard', component: () => import('@/dashboard/index.vue'),
        children: [
            { path: '/dashboard', exact: true, redirect: '/dashboard/module1' },
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


export default router;


