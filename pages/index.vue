<template>
  <div class="container px-4" :class="{ dark: isModeDark }">
    <Header
      @themeToggled="handleThemeToggled"
      @searchWeather="handleSearchWeather"
    />
    <div v-if="!isNotFound" class="grid grid-cols-1 xl:grid-cols-3 gap-12">
      <div class="shadow-xs dark:bg-black w-full bg-white rounded-[20px] p-5">
        <div class="flex items-center gap-8 mb-8 justify-between">
          <div class="flex flex-col">
            <CPreloader :loading="loading" width="174px" height="144px" />
            <template v-if="!loading">
              <h1 class="text-8xl text-blue">
                {{ Math.round(weatherInfo?.main?.temp) }}°
              </h1>
              <span
                class="text-black dark:text-white font-normal leading-40 text-[40px]"
                >Сегодня</span
              >
            </template>
          </div>
          <CPreloader :loading="loading" width="119px" height="119px" />
          <img
            v-if="
              !loading &&
              weatherInfo &&
              weatherInfo?.weather &&
              weatherInfo?.weather[0] &&
              weatherInfo?.weather[0]?.description
            "
            class="w-full max-w-[119px] h-full max-h-[119px]"
            :src="weatherImagePath"
            :alt="weatherInfo?.weather[0]?.description"
          />
        </div>
        <div class="flex flex-col gap-3">
          <CPreloader
            v-for="i in 2"
            :key="i"
            :loading="loading"
            width="100%"
            height="32px"
          />
          <template v-if="!loading">
            <span class="text-gray text-2xl">Время: {{ currentTime }}</span>
            <span class="text-gray text-2xl"
              >Город: {{ weatherInfo?.name }}</span
            >
          </template>
        </div>
      </div>
      <div
        class="shadow-xs dark:bg-black bg-[url('@/assets/image/cloud-image.png')] bg-no-repeat bg-right-top bg-white rounded-[20px] p-5 xl:col-span-2"
      >
        <div class="flex flex-col gap-7">
          <CPreloader
            v-for="i in 4"
            :key="i"
            :loading="loading"
            width="100%"
            height="38px"
          />
        </div>
        <ul v-if="!loading" class="flex flex-col gap-7">
          <li class="flex items-center gap-5">
            <div class="flex items-center gap-5">
              <i
                class="flex items-center justify-center w-[38px] h-[38px] bg-white shadow-md rounded-full"
              >
                <svg class="icon" width="25" height="25">
                  <use xlink:href="@/assets/icons/sprite.svg#temp"></use>
                </svg>
              </i>
              <span
                class="text-sm leading-17 dark:text-white text-gray font-normal"
                >Температура</span
              >
            </div>
            <div
              class="text-black dark:text-white text-sm font-normal leading-17"
            >
              {{ Math.round(weatherInfo?.main?.temp) }}° - ощущается как
              {{ Math.round(weatherInfo?.main?.feels_like) }}°
            </div>
          </li>
          <li class="flex items-center gap-5">
            <div class="flex items-center gap-5">
              <i
                class="flex items-center justify-center w-[38px] h-[38px] bg-white shadow-md rounded-full"
              >
                <img src="@/assets/icons/pressure.svg" alt="" />
              </i>
              <span
                class="text-sm dark:text-white leading-17 text-gray font-normal"
                >Давление
              </span>
            </div>
            <div
              class="text-black dark:text-white text-sm font-normal leading-17"
            >
              {{ Math.round(weatherInfo?.main?.pressure) }} мм ртутного столба -
              нормальное
            </div>
          </li>
          <li class="flex items-center gap-5">
            <div class="flex items-center gap-5">
              <i
                class="flex items-center justify-center w-[38px] h-[38px] bg-white shadow-md rounded-full"
              >
                <svg class="icon" width="25" height="25">
                  <use xlink:href="@/assets/icons/sprite.svg#fallout"></use>
                </svg>
              </i>
              <span
                class="text-sm dark:text-white leading-17 text-gray font-normal"
                >Осадки</span
              >
            </div>
            <div
              class="text-black dark:text-white text-sm font-normal leading-17"
            >
              Без осадков
            </div>
          </li>
          <li class="flex items-center gap-5">
            <div class="flex items-center gap-5">
              <i
                class="flex items-center justify-center w-[38px] h-[38px] bg-white shadow-md rounded-full"
              >
                <svg class="icon" width="20" height="20">
                  <use xlink:href="@/assets/icons/sprite.svg#wind"></use>
                </svg>
              </i>
              <span
                class="text-sm dark:text-white leading-17 text-gray font-normal"
                >Ветер</span
              >
            </div>
            <div
              class="text-black text-sm dark:text-white font-normal leading-17"
            >
              {{ Math.round(weatherInfo?.wind?.speed) }} м/с юго-запад - легкий
              ветер
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-else
      class="shadow-xs flex items-center justify-center dark:bg-black w-full bg-white rounded-[20px] p-5"
    >
      Не найден такое город
    </div>
    <div class="mt-12">
      <div class="flex items-center justify-between">
        <button
          class="shadow-xs px-5 dark:text-white bg-blue py-2 text-white rounded-[5px] font-normal text-md leading-20"
        >
          На неделю
        </button>
        <button
          class="shadow-xs px-5 bg-white py-2 text-black rounded-[5px] font-normal text-md leading-20"
        >
          Отменить
        </button>
      </div>
      <div
        class="shadow-xs dark:bg-black dark:text-white grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 mt-2 rounded-b-[20px] bg-white p-5"
      >
        <div
          v-for="(item, index) in weatherInfoList?.list"
          :key="index"
          class="bg-blue-100 p-3 rounded-[10px]"
        >
          <span>{{getShortWeekdayFromDate(item?.dt_txt)}}</span>
          <p>{{ formattedDate(item?.dt_txt) }}</p>
          <img
            class="my-3 w-12 h-12"
            :src="weatherImagePathList(item?.weather[0].icon)"
            alt=""
          />
          <span class="text-[22px] text-black dark:text-white"
            >{{ Math.round(item?.main?.temp) }}°</span
          >
          <p class="text-gray">{{ Math.round(item?.main?.feels_like) }}°</p>
          <div>{{ item?.weather[0].main }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/service/axios";
import { apiKey, forecast, weather } from "@/service/const";

export default {
  name: "IndexPage",
  data() {
    return {
      city: "Tashkent",
      weatherInfo: null,
      weatherInfoList: null,
      currentTime: "",
      loading: false,
      isModeDark: false,
      isNotFound: false,
    };
  },

  computed: {
    weatherImagePath() {
      const description = this.weatherInfo?.weather[0]?.icon;
      return `https://openweathermap.org/img/w/${this.addHyphenBetweenSpaces(
        description
      )}.png`;
    },
  },

  methods: {
    async getWeatherInfo() {
      this.loading = true;
      await axios
        .get(`${weather}?q=${this.city}&units=metric&appid=${apiKey}`)
        .then((res) => {
          this.weatherInfo = res.data;
          this.loading = false;
        })
        .catch((e) => {
          console.log("e", e.response.data.cod);
          this.isNotFound = e.response.data.cod === "404";
        });
    },
    async getWeatherList() {
      this.loading = true;
      await axios
        .get(`${forecast}?q=${this.city}&units=metric&appid=${apiKey}`)
        .then((res) => {
          this.weatherInfoList = res.data;
          this.loading = false;
        })
        .catch((e) => {
          console.log("e", e.response.data.cod);
          this.isNotFound = e.response.data.cod === "404";
        });
    },
    handleSearchWeather(cityName) {
      this.city = cityName;
      this.getWeatherInfo(cityName);
      this.getWeatherList(cityName);
      console.log("city", cityName);
    },
    weatherImagePathList(item) {
      return `https://openweathermap.org/img/w/${this.addHyphenBetweenSpaces(
        item
      )}.png`;
    },
    getCurrentTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      this.currentTime = `${hours}:${minutes}`;
    },
    addHyphenBetweenSpaces(text) {
      if (!text || text.trim() === "") {
        return "";
      }

      const words = text.split(" ");
      return words.join("-");
    },
    handleThemeToggled(value) {
      this.isModeDark = value;
    },
    formattedDate(date) {
      const months = {
        "01": "янв",
        "02": "фев",
        "03": "мар",
        "04": "апр",
        "05": "май",
        "06": "июн",
        "07": "июл",
        "08": "авг",
        "09": "сен",
        10: "окт",
        11: "ноя",
        12: "дек",
      };

      const parts = date.split(" ")[0].split("-");
      const day = parseInt(parts[2], 10);
      const month = months[parts[1]];
      const time = date.split(" ")[1].slice(0, -3);

      return `${day} ${month} ${time}`;
    },
    getShortWeekdayFromDate(dateString) {
      const date = new Date(dateString);
      const options = { weekday: 'short' }; // Опции форматирования для получения короткого названия дня недели
      const shortWeekday = date.toLocaleString('ru-RU', options); // 'ru-RU' - код языка и страны для русского языка

      return  shortWeekday.charAt(0).toUpperCase() + shortWeekday.slice(1);
    },
  },
  mounted() {
    this.getWeatherInfo();
    this.getWeatherList();
    this.getCurrentTime();
    setInterval(this.getCurrentTime, 1000);
  },
};
</script>
