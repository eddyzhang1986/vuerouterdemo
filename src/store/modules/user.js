const user = {
    namespaced: true,
    state: () => ({
        count: 2
    }),
    mutations: {
        PLUS (state) {
            // 变更状态
            state.count++
        }
    }
    ,
    actions: {},
    getters: {}
}

export default user;
