
import { enchance } from './permission';
import createRouter from './create';

//静态路由
const routes = [
    { path: '/', exact: true, redirect: '/login' },
    { name: 'login', path: '/login', component: () => import('@/login/index.vue') },
    { name: 'dashboard' },//name占位无实际作用
    { path: '*', component: () => import('@/404/index.vue') }
]

//初始化一个router
const router = createRouter(routes);

//启用权限(增强路由功能)
enchance(router);

export default router;


