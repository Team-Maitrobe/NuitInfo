<template>
    <Header></Header>    
    <div class="items-center justify-center mb-20 max-w-70 mt-20">
        <h1 class="text-center mb-10 text-4xl font-extrabold">{{$t("debunk.title")}}</h1>

        <div class="flex items-center justify-center h-screen w-full space-x-4">
            
        <div v-for="(fact, i1) in $tm('debunk.facts')" :key="i1" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h2 class="mb-4 text-3xl font-extrabold">{{ $t("debunk.facts["+i1+"].title") }}</h2>

          <p class="mb-2" v-for="(description, i2) in $tm('debunk.facts[' + i1 + '].description')" :key="i2">
        - {{ $t("debunk.facts["+i1+"].description["+i2+"]") }}</p>
            </div>
      </div>
    </div>
    <Footer></Footer>
</template>