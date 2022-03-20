import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

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
    logoutUser(state) {
      state.user = null;
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
  // !unsecured form in storage
  // plugins: [createPersistedState({key: 'currentUser'})],
  plugins: [
    createPersistedState({
      key: "currentPerson",
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});

export default store;
