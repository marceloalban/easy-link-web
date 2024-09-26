<template>
    <div>
        <div class="bg-green-800 p-4">
            <h1 class="text-xl text-white font-semibold">Previsão do tempo para {{ sites.sitesData.name }}</h1>
        </div>

        <slot />
    </div>
</template>

<script setup>
const sites = useSitesStore()
</script>