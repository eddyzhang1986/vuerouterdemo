
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


const createRouter = (routes) => {

    const router = new VueRouter({
        mode: 'hash',
        routes: routes
    });

    //add addroutes methods
    router.$addRoutes = (params) => {

        //清空router的routes数据
        router.matcher = new VueRouter({
            mode: 'hash'
        }).matcher;

        let routes1 = [...routes];
        let routes2 = [...params];
        let routes3 = [];

        for (let rts1 of routes1) {
            if (rts1.name == '') {

                //替换
                //删除

            } else {
                routes3.push(rts1);
            }
        }

        //新的routes数组
        let routes4 = [...routes3, ...routes2]

        //添加新的rts4数据
        for (let rts4 of routes4) {
            router.addRoute(rts4)
        }
    }

    return router;
}

export default createRouter;