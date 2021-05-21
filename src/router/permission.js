import { FakeToken } from '@/util';

export const enchance = (router) => {

    // GOOD

    router.beforeEach((to, from, next) => {
        console.log(to);
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