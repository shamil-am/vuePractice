import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user: null,
      saltKey: "Adm!n_L0cale?26-66",
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    _isAuthenticated: (state) => state.user !== null,
    _getCurrentUser(state) {
      let pureUser = state.user;
      delete pureUser?.password;
      return pureUser;
    },
    _saltKey: (state) => state.saltKey,
  },
});

export default store;
