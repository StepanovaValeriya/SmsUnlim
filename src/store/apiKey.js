import api from '../api/axios';

export default {
  actions: {
    changeApiKey({ commit }) {
      const userId = JSON.parse(localStorage.getItem('userId'));
      const apiKey = JSON.parse(localStorage.getItem('apiKey'));
      api
        .put('/Account/EditApikey', {
          id: userId,
          currentApikey: apiKey,
        })
        .then((response) => {
          console.log(response);

          localStorage.setItem('apiKey', JSON.stringify(response.data));
        })
        .catch((err) => {
          commit('setError', err);
          console.log(err.response);
        });
    },
  },
};
