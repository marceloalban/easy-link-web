<template>
    <div class="bg-green-800 text-center">
        <img class="w-full h-20 object-scale-down p-4" :src="option.logoUrl" />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
        <NuxtLink class="bg-gray-200 m-2 rounded-xl overflow-hidden shadow-md hover:cursor-pointer p-4 font-semibold"
            v-for="option in option.options" :to="option.url">
            {{ option.description }}
        </NuxtLink>
    </div>
</template>

<script setup>
const sites = useSitesStore()
const route = useRoute()
const option = sites.sitesData.sites.find(option => option.id == route.params.id)

</script>