
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
                    userinfo: [],
                    routerinfo
                }, message: 'login success'
            };
        }

        return { success: false, data: null, message: 'token invalid' };
    }
}

