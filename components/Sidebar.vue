<template>
    <div class="w-64 bg-red-500">
        <div class="mt-10">
            <nuxt-link to="/" class="flex items-center mt-5 py-2 px-8 text-white hover:bg-gray-200 hover:text-gray-700 cursor-pointer hover:border-gray-700">
                <fa :icon="['fas','chalkboard']"/>
                <span class="mx-4 font-medium">Dashboard</span>
            </nuxt-link>
            <nuxt-link to="/donations" class="flex items-center mt-5 py-2 px-8 text-white hover:bg-gray-200 hover:text-gray-700 cursor-pointer hover:border-gray-700">
                <fa :icon="['fas','hand-holding-heart']"/>
                <span class="mx-4 font-medium">Donations</span>
            </nuxt-link>
            <nuxt-link to="/records" class="flex items-center mt-5 py-2 px-8 text-white hover:bg-gray-200 hover:text-gray-700 cursor-pointer hover:border-gray-700">
                <fa :icon="['fas','history']"/>
                <span class="mx-4 font-medium">Records</span>
            </nuxt-link>
        </div>
    </div>
</template>