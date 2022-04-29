import api from '../api/axios';

export default {
  state: {
    balance: '',
  },
  mutations: {
    setBalance(state, balance) {
      state.balance = balance;
    },
  },
  getters: {
    balance: (state) => state.balance,
  },
  actions: {
    getBalance({ commit }) {
      const userId = JSON.parse(localStorage.getItem('userId'));
      return api
        .get('/Account/GetBalance', {
          params: {
            id: userId,
          },
        })
        .then((response) => {
          const balance = response.data;
          console.log(balance);
          commit('setBalance', balance);
        })
        .catch((err) => {
          commit('setError', err);
          console.log(err.response);
        });
    },
  },
};
