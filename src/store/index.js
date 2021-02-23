import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    userDetails:{
      "firstname": '',
      "lastname": '',
      "userId": '',
      "phoneNumber": '',
      "address": '',
    },
    authentication:{
      'status': false,
    },
  },
  mutations: {
    setUserDetails(state,{data}){
      state.userDetails.firstname= data.firstname;
      state.userDetails.lastname= data.lastname;
      state.userDetails.userId= data.userId;
      state.userDetails.phoneNumber= data.phoneNumber;
      state.userDetails.address= data.address;
    },
    setAuthentication(state,{data}){
      state.authentication.status= data.status;
      console.log('set state called');
    },
  },
  actions: {
  },
  modules: {
  }
})
