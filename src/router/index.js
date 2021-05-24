
import Vue from 'vue'
import VueRouter from 'vue-router'
import { enchance } from './permission';


Vue.use(VueRouter);



const routes = [
    { path: '/', exact: true, redirect: '/login' },
    { name: 'login', path: '/login', component: () => import('@/login/index.vue') }
]

const router = new VueRouter({
    mode: 'hash',
    routes: routes
});

//启用权限
enchance(router);

export default router;


