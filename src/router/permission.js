import { FakeToken } from '@/util';
//import { sleep } from '@/util';

export const enchance = (router) => {

    // GOOD

    router.beforeEach(async (to, from, next) => {

        console.log(to,'begin');
        //await sleep(5000);
        console.log('complete');

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