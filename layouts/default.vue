<template>
    <div>
        <div class="bg-gray-200 p-4">
            <h1 class="text-xl font-semibold">Previsão do tempo para {{ sites.sitesData.name }}</h1>
        </div>

        <slot />
    </div>
</template>

<script setup>
const sites = useSitesStore()
</script>