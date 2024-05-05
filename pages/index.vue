<template>
  <div class="container px-4" :class="{ dark: isDark }">
    <Header @themeToggled="handleThemeToggled" />
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-12">
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
            v-if="!loading"
            class="w-ful h-[119px]"
            :src="`/_nuxt/assets/image/weather-main/${addHyphenBetweenSpaces(
              weatherInfo?.weather[0]?.description
            )}.png`"
            alt=""
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
            <span class="text-gray text-2xl">Город: {{ city }}</span>
          </template>
        </div>
      </div>
      <div
        class="shadow-xs dark:bg-black bg-[url('@/assets/image/cloud-image.png')] bg-no-repeat bg-right-top bg-white rounded-[20px] p-5 xl:col-span-2"
      >
        <div class="flex flex-col gap-5">
          <CPreloader
            v-for="i in 4"
            :key="i"
            :loading="loading"
            width="100%"
            height="32px"
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
          На неделю
        </button>
      </div>
      <div
        class="shadow-xs dark:bg-black dark:text-white grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 mt-2 rounded-b-[20px] bg-white p-5"
      >
        <div class="bg-blue-100 p-3 rounded-[10px]">
          <span>Сегодня</span>
          <p>28 авг</p>
          <img src="@/assets/icons/small-rain-sun.svg" alt="" />
          <span>+18°</span>
          <p>+15°</p>
          <div>Облачно</div>
        </div>
        <div class="bg-blue-100 p-3 rounded-[10px]">
          <span>Сегодня</span>
          <p>28 авг</p>
          <img src="@/assets/icons/small-rain-sun.svg" alt="" />
          <span>+18°</span>
          <p>+15°</p>
          <div>Облачно</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/service/axios";
// const apiKey = import.meta.env.VUE_APP_API_KEY
export default {
  name: "IndexPage",
  data() {
    return {
      city: "Tashkent",
      weatherInfo: null,
      currentTime: "",
      loading: false,
      isDark: false,
      apiKey: '9b713948a01879d0619d32c9e1d8c87f'
    };
  },

  computed: {
    weatherImagePath() {
      const description = this.weatherInfo?.weather[0]?.description;
      return `@/assets/image/weather-main/${this.addHyphenBetweenSpaces(
        description
      )}.png`;
    },
  },

  methods: {
    async getWeatherInfo() {
      this.loading = true;
      await axios
        .get(`?q=${this.city}&units=metric&appid=${this.apiKey}`)
        .then((res) => {
          this.weatherInfo = res.data;
          this.loading = false;
        });
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
      this.isDark = value
    }
  },
  mounted() {
    this.getWeatherInfo();
    this.getCurrentTime();
    setInterval(this.getCurrentTime, 1000);
  },
};
</script>
