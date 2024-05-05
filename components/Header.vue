<template>
  <header class="pt-5 mb-8 flex items-center justify-between">
    <div class="flex items-center gap-5">
      <svg class="icon" width="65" height="65">
        <use xlink:href="@/assets/icons/sprite.svg#weather-logo"></use>
      </svg>
      <h4 class="text-blue uppercase leading-30 text-2xl font-bold">vue weather</h4>
    </div>
    <div class="flex items-center gap-5">
      <svg @click="isToggleTheme" class="icon cursor-pointer flex-shrink-0" width="35" height="35">
        <use xlink:href="@/assets/icons/sprite.svg#theme-logo"></use>
      </svg>
      <input
        class="bg-blue-100 py-3 dark:text-white dark:placeholder-white px-5 w-full rounded-xl text-black placeholder-black"
        type="text"
        v-model="city"
        @keyup.enter="searchWeather"
        placeholder="Выбрать город
">
    </div>
  </header>

</template>
<script setup>

import {ref, watch} from "vue";

const isDark = ref(false)
const city = ref("")
const $emit = defineEmits()

const isToggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
}

const searchWeather = () => {
  $emit('searchWeather', city.value)
  console.log('header')
}

watch(isDark, () => {
  $emit('themeToggled', isDark.value);
});

</script>

<style scoped>

</style>
