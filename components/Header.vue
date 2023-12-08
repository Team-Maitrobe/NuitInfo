
<template>
    <header class="fixed bg-emerald-500 text-white p-4 flex items-center justify-between top-0 w-full z-50 shadow-md dark:bg-gray-800 dark:text-gray-200">
        <!-- Left Section - Title -->
        <a href="/"><div class="flex items-center space-x-2">
            <img src="/assets/img/maitrobe.svg" alt="Logo" class="h-10 w-10 rounded-full">
            <h1 class="text-xl font-semibold">Maitrobé</h1>
        </div></a>

        <!-- Center Section - Navbar (Sticky) -->
        <nav class="flex space-x-5 items-center">
            <a href="debunk" class="text-white hover:text-gray-300">{{$t("debunk.name")}}</a>
            <a href="challenges" class="text-white hover:text-gray-300">{{$t("challenges.name")}}</a>
        </nav>
        <!-- Right Section - Logo -->
        <div>
            <img src="/assets/img/main.png" alt="Logo" class="h-10 w-10">
        </div>
    </header>
</template>