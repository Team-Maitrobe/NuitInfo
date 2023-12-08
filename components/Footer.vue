<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>
<template>
    <footer class="bg-emerald-900 mt-20 text-white dark:bg-gray-800 dark:text-gray-200">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="assets/img/maitrobe.svg" class="h-8" alt="Maitrobé Logo" />
                </a>
            </div>
            <span class="block text-sm sm:text-left mt-4">© 2023 Maitrobé. All Rights Reserved.<br>Made by : <a
                    href="https://github.com/Myrmidou24">Maxime</a>,
                     <a href="https://github.com/Tretrenoff">Florian</a>,
                      <a href="https://github.com/dotz8">Octave</a>,
                       <a href="https://github.com/XavierLeClavier">Xavier</a>,
                        <a href="https://github.com/FreiikDev">Adam</a> - 
                         on <a href="https://github.com/orgs/Team-Maitrobe">Team Maitrobé</a><a href="easteregg" class="lg:block opacity-0"  style="cursor:default;">MOUHAHAHAHA EASTER EGG 2 MOTHERFUCKER</a></span>
                
        <NuxtLink class="mr-2" v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">{{
    locale.name  
  }}</NuxtLink>
        </div>
    </footer>
</template>