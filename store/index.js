// // store/index.js
// import { createStore } from 'vuex';
// import axios from '@/service/axios';
//
//
// export default createStore({
//   state: {
//     isDarkTheme: false,
//     weatherInfo: null,
//   },
//   mutations: {
//     toggleTheme(state) {
//       state.isDarkTheme = !state.isDarkTheme;
//     },
//     setWeatherInfo(state, weatherInfo) {
//       state.weatherInfo = weatherInfo;
//     },
//   },
//   actions: {
//     async fetchWeatherInfo({ commit }, city) {
//       try {
//         const response = await axios.get(`?q=${city}&units=metric&appid=${process.env.VUE_APP_API_KEY}`);
//         commit('setWeatherInfo', response.data);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     },
//     toggleTheme({ commit }) {
//       commit('toggleTheme');
//     },
//   },
//   getters: {
//     isDarkTheme(state) {
//       return state.isDarkTheme;
//     },
//     weatherInfo(state) {
//       return state.weatherInfo;
//     },
//   },
// });
