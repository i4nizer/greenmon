<template>
    <v-card class="pa-3">
        <v-card-title>Actuators</v-card-title>
        <v-card-text v-for="a in actuators" class="py-1 d-flex justify-space-between">
            <span>{{ a?.name ?? 'Actuator' }}</span>
            <EditActuatorDialog />
        </v-card-text>
    </v-card>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';



const EditActuatorDialog = defineAsyncComponent(() => import('@/components/greenhouses/greenhouse/devices/EditActuatorDialog.vue'))

//
const props = defineProps(['actuators'])
</script>

<style scoped>

</style>