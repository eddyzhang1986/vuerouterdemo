import { Loading } from 'element-ui';
import Cookies from 'js-cookie'


const options = {
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
}


export class LoadingSvc {
    static instance;
    static show () {
        LoadingSvc.instance = Loading.service(options);
    }
    static hide () {
        if (LoadingSvc.instance) {
            LoadingSvc.instance.close();
        }
    }
}




export class FakeToken {
    static key = "vue-router-demo-user-token"

    static isAuthed () {
        return Cookies.get(FakeToken.key) ? true : false;
    }
    
    static getToken () {
        return Cookies.get(FakeToken.key)
    }
    static setToken (token) {
        return Cookies.set(FakeToken.key, token)
    }
    static removeToken () {
        return Cookies.remove(FakeToken.key)
    }
}

