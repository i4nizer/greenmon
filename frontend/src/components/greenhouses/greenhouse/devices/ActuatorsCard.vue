<template>
    <v-card class="pa-3">
        <v-card-title>Actuators</v-card-title>
        <v-card-text v-for="a in actuators" class="py-1 d-flex justify-space-between">
            <span>{{ a?.name ?? 'Actuator' }}</span>
            <span :class="a?.status && a.status == 'On' ? 'text-green' : 'text-yellow'">{{ a?.status ?? 'Off' }}</span>
        </v-card-text>
    </v-card>
</template>

<script setup>
//


const props = defineProps(['actuators'])
</script>

<style scoped>

</style>