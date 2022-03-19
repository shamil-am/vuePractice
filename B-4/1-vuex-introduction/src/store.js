import { createStore } from "vuex";

const store = createStore({
  state: {
    // return {
    count: 0,
    person: {
      name: "Shamo",
      age: 28,
      phone: 555222666,
      password: "samil2666",
      salary: 2000,
    },
    itemList: [
      { id: 1, title: "Masa", type: "mobilya" },
      { id: 2, title: "Sandalye", type: "mobilya" },
      { id: 3, title: "TV", type: "elektronik" },
      { id: 4, title: "Monitor", type: "elektronik" },
      { id: 5, title: "Bardak", type: "plastik" },
    ],
    // };
  },
  getters: {
    // electronicItems: (state) =>
    //   state.itemList.filter((item) => item.type === "elektronik"),
    _electronicItems(state) {
      return state.itemList.filter((item) => item.type === "elektronik");
    },
    _person(state) {
      const person = { ...state.person };
      delete person.salary;
      delete person.password;
      return person;
    },
    _furniture(state) {
      return state.itemList.filter((item) => item.type === "mobilya");
    },
  },
  // !mutation sinxron calisir ama settimeout ile duzgun calisir ?!
  mutations: {
    addNewItem(state, item) {
      // setTimeout(() => {
      state.itemList.push(item);
      // }, 2000);
    },
  },
  // !asinxron calisir asyc await burda calisir
  actions: {
    addNewItemA(context, item) {
      //TODOS {commit} ede bilersen context evezine
      setTimeout(() => {
        //TODOS commit("addNewItem", item); etmek olar
        context.commit("addNewItem", item);
      }, 2000);
    },
  },
});

export default store;
