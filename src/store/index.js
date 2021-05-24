import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user';
//import createPersistedState from "vuex-persistedstate";

//持久化user
// const userPersisted = createPersistedState({
//   paths: ['user']
// })


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user: user
  },
  //plugins: [userPersisted]
})

export default store;