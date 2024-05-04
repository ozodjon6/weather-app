<template>
  <div class="container">
    <Header/>
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-12">
      <div class="shadow-xs w-full bg-white rounded-[20px] p-5">
        <div class="flex items-center gap-8 mb-8 justify-between">
          <div class="flex flex-col">
            <h1 class="text-8xl text-blue">20°</h1>
            <span class="text-black font-normal leading-40 text-[40px]">Сегодня</span>
          </div>
          <img class="w-[119px]" src="@/assets/icons/sun.svg" alt="">
        </div>
        <div class="flex flex-col gap-3">
          <span class="text-gray text-2xl">Время: 21:54</span>
          <span class="text-gray text-2xl">Город: Санкт-Петербург</span>
        </div>
      </div>
      <div class="shadow-xs bg-[url('@/assets/image/cloud-image.png')] bg-no-repeat bg-right-top bg-white rounded-[20px] p-5 xl:col-span-2">
        <ul class="flex flex-col gap-7">
          <li class="flex items-center gap-5">
            <div class="flex items-center gap-5">
              <i class="flex items-center justify-center w-[38px] h-[38px] bg-white shadow-md rounded-full">
                <svg class="icon" width="25" height="25">
                  <use xlink:href="@/assets/icons/sprite.svg#temp"></use>
                </svg>
              </i>
              <span class="text-sm leading-17 text-gray font-normal">Температура</span>
            </div>
            <div class="text-black text-sm font-normal leading-17">
              20° - ощущается как 17°
            </div>
          </li>
          <li class="flex items-center gap-5">
            <div class="flex items-center gap-5">
              <i class="flex items-center justify-center w-[38px] h-[38px] bg-white shadow-md rounded-full">
                <img src="@/assets/icons/pressure.svg" alt="">
              </i>
              <span class="text-sm leading-17 text-gray font-normal">Давление </span>
            </div>
            <div class="text-black text-sm font-normal leading-17">
              765 мм ртутного столба - нормальное
            </div>
          </li>
          <li class="flex items-center gap-5">
            <div class="flex items-center gap-5">
              <i class="flex items-center justify-center w-[38px] h-[38px] bg-white shadow-md rounded-full">
                <svg class="icon" width="25" height="25">
                  <use xlink:href="@/assets/icons/sprite.svg#fallout"></use>
                </svg>
              </i>
              <span class="text-sm leading-17 text-gray font-normal">Осадки</span>
            </div>
            <div class="text-black text-sm font-normal leading-17">
              Без осадков
            </div>
          </li>
          <li class="flex items-center gap-5">
            <div class="flex items-center gap-5">
              <i class="flex items-center justify-center w-[38px] h-[38px] bg-white shadow-md rounded-full">
                <svg class="icon" width="20" height="20">
                  <use xlink:href="@/assets/icons/sprite.svg#wind"></use>
                </svg>
              </i>
              <span class="text-sm leading-17 text-gray font-normal">Ветер</span>
            </div>
            <div class="text-black text-sm font-normal leading-17">
              3 м/с юго-запад - легкий ветер
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
