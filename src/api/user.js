
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
                        path: '/dashboard', component: () => import('@/dashboard/index.vue'),
                        children: [
                            { name: 'dashboard-index', path: '/dashboard', exact: true, redirect: '/dashboard/module1' },
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

