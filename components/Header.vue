<template>
    <header class="fixed bg-emerald-500 text-white p-4 flex items-center justify-between top-0 w-full z-50 shadow-md dark:bg-gray-800 dark:text-gray-200">
        <!-- Left Section - Title -->
        <div class="flex items-center space-x-2">
            <img src="/assets/img/maitrobe.svg" alt="Logo" class="h-10 w-10 rounded-full">
            <h1 class="text-xl font-semibold">Maitrobé</h1>
        </div>

        <!-- Center Section - Navbar (Sticky) -->
        <nav class="flex space-x-4 items-center">
            <a href="debunk" class="text-white hover:text-emerald-300">Debunk</a>
            <a href="about" class="text-white hover:text-emerald-300">À propos</a>
            <a href="#" class="text-white hover:text-emerald-300">Quizz</a>
            <a href="#" class="text-white hover:text-emerald-300">Contact</a>
        </nav>

        <button type="button" onclick="modenoel()">Change theme</button>

        <!-- Right Section - Logo -->
        <div>
            <img src="/assets/img/main.png" alt="Logo" class="h-10 w-10">
        </div>
    </header>
</template>