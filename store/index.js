import axios from "@/service/axios";
import { apiKey, forecast, weather } from "@/service/const";


export const state = () => ({
  weatherInfo: null,
  weatherInfoList: null,
  loading: false,
  isNotFound: false
})

export const mutations = () => ({
  SET_WEATHER_INFO(state, data) {
    state.weatherInfo = data;
  },
  SET_WEATHER_INFO_LIST(state, data) {
    state.weatherInfoList = data;
  },
  SET_LOADING(state, value) {
    state.loading = value;
  },
  SET_NOT_FOUND(state, value) {
    state.isNotFound = value;
  }
})

export const actions = () => ({
  async fetchWeatherInfo({ commit }, city) {
    commit('SET_LOADING', true);
    try {
      const response = await axios.get(`${weather}?q=${city}&units=metric&appid=${apiKey}`);
      commit('SET_WEATHER_INFO', response.data);
      commit('SET_LOADING', false);
      commit('SET_NOT_FOUND', false);
    } catch (error) {
      console.error(error);
      commit('SET_NOT_FOUND', error.response.data.cod === "404");
      commit('SET_LOADING', false);
    }
  },
  async fetchWeatherList({ commit }, city) {
    commit('SET_LOADING', true);
    try {
      const response = await axios.get(`${forecast}?q=${city}&units=metric&appid=${apiKey}`);
      commit('SET_WEATHER_INFO_LIST', response.data);
      commit('SET_LOADING', false);
      commit('SET_NOT_FOUND', false);
    } catch (error) {
      console.error(error);
      commit('SET_NOT_FOUND', error.response.data.cod === "404");
      commit('SET_LOADING', false);
    }
  }
})
