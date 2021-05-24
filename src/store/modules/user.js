import { FakeUser } from '@/api/user';


const user = {
    namespaced: true,
    state: () => ({
        initialization: false,
        info: {
        },
        routes: [

        ]
    }),
    mutations: {
        //设置用户和路由的信息
        SET_USERINFO (state, { info, routes }) {
            state.info = { ...info };
            state.routes = [...routes];
            state.initialization = true;
        }
    }
    ,
    actions: {
        async getUserInfo ({ commit }, token) {
            const result = await FakeUser.getUserInfo(token)
            if (result.success) {
                commit('SET_USERINFO', result.data);
            }
            return result;
        }
    },
    getters: {}
}

export default user;
