<template>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        <NuxtLink class="flex items-center bg-green-900 m-2 rounded-xl overflow-hidden shadow-md hover:cursor-pointer"
            v-for="site in sites.sitesData.sites" :key="site.id" 
            :to="`options/${site.id}`">
            <div class="w-20 h-20 bg-green-800 p-2">
                <img class="w-full h-full object-scale-down" :src="site.logoUrl" />
            </div>
            <div class="text-xl font-semibold p-4 text-white">
                {{ site.description }}
            </div>
        </NuxtLink>
    </div>


</template>

<script setup>
const sites = useSitesStore()
</script>