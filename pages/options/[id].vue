<template>

    <div class="grid grid-cols-1 sm:grid-cols-2">
        <NuxtLink
            class="bg-green-800 m-2 rounded-xl overflow-hidden shadow-md hover:cursor-pointer p-4 font-semibold text-white"
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