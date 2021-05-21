import { FakeUser } from '@/api/user';


const user = {
    namespaced: true,
    state: () => ({
        count: 2,
        userInfo: {

        }
    }),
    mutations: {
        PLUS (state) {
            // 变更状态
            state.count++
        },
        //设置用户信息
        SET_USERINFO (state, userInfo) {
            state.userInfo = { ...userInfo }
        }
    }
    ,
    actions: {
        async getUserInfo ({ commit }, token) {
            const result = await FakeUser.getUserInfo(token)
            if (result.success) {
                commit('SET_USERINFO', result.data.userInfo);
            }
            return result;
        }
    },
    getters: {}
}

export default user;
