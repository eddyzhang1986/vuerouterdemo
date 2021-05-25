import { LoadingSvc, FakeToken } from '@/util';
import { Message } from 'element-ui';
import store from '../store'


export const enchance = (router) => {

    // GOOD
    router.beforeEach(async (to, from, next) => {

        console.log(to, 'to');
        console.log(from, 'from');

        //meta导致的权限问题特别注意
        //判断是否需要用到
        if (to.name !== 'login') {
            //需要用到从后台读取的权限
            if (FakeToken.isAuthed()) {
                //fetch routes from server
                if (!store.state.user.initialization) {

                    //loading
                    LoadingSvc.show();
                    console.log('调用1次', '调用1次');
                    const result = await store.dispatch('user/getUserInfo', FakeToken.getToken());
                    //hide
                    LoadingSvc.hide();
                    if (result.success) {
                        //获取成功设置用户信息和路由参数都可以在这里取到
                        router.$addRoutes([...result.data.routes]);

                        //输出当前路由
                        console.log(router.getRoutes(), 'getRoutes');
                        //最终进行调转
                        next({ ...to, replace: true });

                    } else {

                        //获取失败直接重定向到登录页面并弹出原因
                        //Message.$message(result.message);
                        //console.log(Message,'Message')
                        Message(result.message)
                        next({ name: 'login' });

                    }

                } else {
                    next();
                }
            } else {
                //无权限重新定向到登录页面
                next({ name: 'login' });
            }
        }
        else {
            //不需要用到后台动态读取的权限,直接静态路由即可
            next();
        }

    })

}