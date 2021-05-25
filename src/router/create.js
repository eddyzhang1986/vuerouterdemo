
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
            let rts2 = routes2.find(r2 => r2.name === rts1.name)
            if (rts2) {
                //替换
                routes3.push(rts2);
                //删除
                routes2.splice(routes2.indexOf(rts2), 1);
            } else {
                routes3.push(rts1);
            }
        }

        //新的routes数组
        let routes4 = [...routes3, ...routes2]

        console.log(routes4, 'routes4');

        //添加新的rts4数据
        for (let rts4 of routes4) {
            router.addRoute(rts4)
        }
    }

    return router;
}

export default createRouter;