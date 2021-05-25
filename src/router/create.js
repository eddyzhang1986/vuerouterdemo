
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
        router.matcher = new VueRouter({
            mode: 'hash'
        }).matcher
        const rts = [...routes, ...params]
        for (let r of rts) {
            router.addRoute(r)
        }
    }
    return router;
}

export default createRouter;