import { Loading } from 'element-ui';


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