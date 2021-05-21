import { FakeToken } from '@/util';
//import { sleep } from '@/util';

let added = false;

export const enchance = (router) => {

    // GOOD

    router.beforeEach(async (to, from, next) => {

        console.log(to, 'begin');
        //await sleep(5000);
        console.log('complete');


        if (!added) {
            router.addRoute({ name: 'loginfsdafsfd', path: '/loginfsdafsfd', component: () => import('@/dashboard/index.vue') });
            added = true;
            to.name='loginfsdafsfd';
        }
        //   next({name:'loginfsdafsfd'})

        //} else {





        console.log(router.getRoutes(), 'routesroutesroutesroutesroutesroutesroutesroutesroutesroutes')
        //await sleep(5000);

        if (to.name !== 'login' && !FakeToken.isAuthed()) {
            next({ name: 'login' })
        }
        // else if (to.name === 'login' && FakeToken.isAuthed()) {
        //     next({ name: 'dashboard-index' })
        // }
        else {
            next()
        }


    })

}