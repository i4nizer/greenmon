<template>
    <v-card class="bg-transparent border pa-2">
        <v-card-title>System Controls</v-card-title>
        <v-card-text 
            v-for="a in actuators"
            class="d-flex justify-space-between align-center py-1"
        >
            <span>{{ a?.name ?? 'Actuator' }}</span>
            <v-btn class="bg-transparent border text-none">Activate</v-btn>
        </v-card-text>
    </v-card>
</template>

<script setup>
//


const props = defineProps(['actuators'])
</script>

<style scoped></style>
