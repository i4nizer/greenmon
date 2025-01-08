<template>
    <v-card class="pa-3">
        <v-card-title>Sensors</v-card-title>
        <v-card-text v-for="s in sensors" class="py-1 d-flex justify-space-between">
            <span>{{ s?.name ?? 'Sensor' }}</span>
            <span :class="s?.status && s.status == 'Online' ? 'text-green' : 'text-yellow'">{{ s?.status ?? 'Offline' }}</span>
        </v-card-text>
    </v-card>
</template>

<script setup>
//


const props = defineProps(['sensors'])
</script>

<style scoped>

</style>