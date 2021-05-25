
import { sleep } from '@/util';


//User
export class FakeUser {
    static async login (userName, userPwd) {
        await sleep(2000);
        if (userName === 'admin' && userPwd === 'admin') {
            return { success: true, data: { token: 'abracadabra' }, message: 'login success' };
        }
        return { success: false, data: null, message: 'login failed' };
    }


    //get user info with router right
    static async getUserInfo (token) {

        await sleep(2000);

        if (token === 'abracadabra') {
            return {
                success: true, data: {
                    info: {
                        nick: '我的昵称'
                    },
                    routes: [{
                        name: 'dashboard',//注意name和要替换地方一致
                        path: '/dashboard', component: () => import('@/dashboard/index.vue'),
                        children: [
                            { name: 'dashboard-index', path: '/dashboard', redirect: '/dashboard/module1', exact: true },
                            { path: '/dashboard/module1', component: () => import('@/dashboard/module1/index.vue') },
                            { path: '/dashboard/module2', component: () => import('@/dashboard/module2/index.vue') }
                        ]
                    }],
                }, message: 'login success'
            };
        }

        return { success: false, data: null, message: 'token invalid' };
    }
}

