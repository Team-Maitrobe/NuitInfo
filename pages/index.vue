<template>
    <Header></Header>
      <h1 class="text-center mt-10 mb-10 text-4xl font-extrabold">{{$t("home.slogan")}}</h1>

      <div class="flex items-center justify-center w-full space-x-4 mb-20">
        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h2 class="mb-4 text-3xl font-extrabold">{{ $t('home.misinformation.title')}}</h2>
          <p class="mt-5">{{ $t('home.misinformation.description')}}</p>
        </div>
        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h2 class="mb-4 text-3xl font-extrabold">{{ $t('home.climate-sceptics.title')}}</h2>
          <p class="mt-5">{{ $t('home.climate-sceptics.description')}}</p>
        </div>
        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h2 class="mb-4 text-3xl font-extrabold">{{ $t('home.social_media.title')}}</h2>
          <p class="mt-5">{{ $t('home.social_media.description')}}</p>
        </div>
      </div>
      <div class="flex items-start justify-end mt-40 ">
        <a href="https://serrata.super-sympa.fr" class="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h4>{{ $t('home.ad.title')}}</h4>
          <img src="assets/img/globe.png" :alt="$t('home.ad.serrata.alt')" class="w-40">
          <h2 class="mb-4 text-3xl font-extrabold">{{$t('home.ad.serrata.title')}}</h2>
          <p>{{$t('home.ad.serrata.description')}}</p>
        </a>
    </div>
    <Footer></Footer>
  </template>
  