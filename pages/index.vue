<template>

    <div class="grid grid-cols-1 sm:grid-cols-2">
        <NuxtLink class="flex items-center bg-gray-200 m-2 rounded-xl overflow-hidden shadow-md hover:cursor-pointer"
            v-for="site in sites.sitesData.sites" :key="site.id" 
            :to="`options/${site.id}`">
            <div class="w-20 h-20 bg-green-800">
                <img class="w-full h-full object-scale-down" :src="site.logoUrl" />
            </div>
            <div class="text-xl font-semibold p-4">
                {{ site.description }}
            </div>
        </NuxtLink>
    </div>


</template>

<script setup>
const sites = useSitesStore()
</script>