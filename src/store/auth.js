import api from '../api/axios';
export default {
  state: {
    user: {
      apiKey: JSON.parse(localStorage.getItem('apiKey')) || '',
      balance: JSON.parse(localStorage.getItem('balance')) || '',
      customerId: JSON.parse(localStorage.getItem('customerId')) || '',
      email: JSON.parse(localStorage.getItem('email')) || '',
      jwtToken: JSON.parse(localStorage.getItem('jwtToken')) || '',
      userId: JSON.parse(localStorage.getItem('userId')) || '',
    },
  },
  mutations: {
    auth_success(state, user) {
      state.user = {
        apiKey: user.apiKey,
        balance: user.balance,
        customerId: user.customerId,
        email: user.email,
        jwtToken: user.jwtToken,
        userId: user.userId,
      };
    },
    logout(state) {
      state.user = {
        apiKey: '',
        balance: '',
        customerId: '',
        email: '',
        jwtToken: '',
        userId: '',
      };
    },
  },
  getters: {
    apiKey: (state) => state.user.apiKey,
    currentBalance: (state) => state.user.balance,
    customerId: (state) => state.user.customerId,
    email: (state) => state.user.email,

    userId: (state) => state.user.userId,

    // isAuthenticatated проверяет, state.user определено ли значение или null, и возвращает trueили false соответственно
    isAuthenticated: (state) => !!state.user.jwtToken,
  },
  actions: {
    async register({ commit }, user) {
      await api
        .post('/Auth/Register', user)
        .then((response) => {
          console.log('Регистрация выполнена');
        })
        .catch((err) => {
          commit('setError', err);
          console.log(err.response);
        });
    },
    async login({ commit }, user) {
      await api
        .post('/Auth/Login', user)
        .then((response) => {
          console.log(response);
          const user = {
            apiKey: response.data.apiKey,
            balance: response.data.balance,
            customerId: response.data.customerId,
            email: response.data.email,
            jwtToken: response.data.jwtToken,
            userId: response.data.userId,
          };

          localStorage.setItem('apiKey', JSON.stringify(user.apiKey));
          localStorage.setItem('balance', JSON.stringify(user.balance));
          localStorage.setItem('customerId', JSON.stringify(user.customerId));
          localStorage.setItem('email', JSON.stringify(user.email));
          localStorage.setItem('jwtToken', JSON.stringify(user.jwtToken));
          localStorage.setItem('userId', JSON.stringify(user.userId));
          commit('auth_success', user);
        })
        .catch((err) => {
          commit('setError', err);
          localStorage.removeItem('apiKey');
          localStorage.removeItem('balance');
          localStorage.removeItem('customerId');
          localStorage.removeItem('email');
          localStorage.removeItem('jwtToken');
          localStorage.removeItem('userId');
          console.log(err.response);
        });
    },
    logout({ commit }) {
      localStorage.removeItem('apiKey');
      localStorage.removeItem('balance');
      localStorage.removeItem('customerId');
      localStorage.removeItem('email');
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('userId');
      delete api.defaults.headers.common['Authorization'];
      commit('logout');
    },
  },
};
