import { createStore } from "vuex";

const store = createStore({
  state: {
    products: [],
    url: "https://61922b19aeab5c0017105dfb.mockapi.io/product",
  },
  getters: {
    url: (state) => state.url,
  },
  mutations: {
    getProducts(state, payload) {
      fetch(payload)
        .then((response) => response.json())
        .then((data) => (state.products = data));
    },
  },
});

export default store;
