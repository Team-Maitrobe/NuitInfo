<template>
    <Header></Header>    
    <div class="items-center justify-center h-screen max-w-70 mt-20">
      <h1 class="text-center mt-10 mb-10 text-4xl font-extrabold">{{$t("challenges.title")}}</h1>

        <div class="flex items-center justify-center h-screen w-full space-x-4">
            
  <div v-for="(fact, i1) in $tm('challenges.facts')" :key="i1" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h2 class="mb-4 text-3xl font-extrabold">{{ $t("challenges.facts["+i1+"].title") }}</h2>
    <p class="mb-10">{{ $t("challenges.facts["+i1+"].description") }}</p>
  </div>
    </div>
  </div>
    <Footer></Footer>
</template>