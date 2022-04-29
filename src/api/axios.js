import axios from 'axios';

const api = axios.create({
  baseURL: 'http://94.242.27.23:5001/api',
  headers: {
    accept: 'application/json',
  },
});
api.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('jwtToken'));
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// проверка срока дейстия токена
// axios.interceptors.response.use(undefined, function (err) {
//   return new Promise(function (resolve, reject) {
//     if (
//       error.response.status === 401 &&
//       error.config &&
//       !error.config.__isRetryRequest
//     ) {
//       this.$store.dispatch('logout');
//     }
//     throw error;
//   });
// });
export default api;
