<template>
    <v-card class="pa-3">
        <v-card-title>{{ name ?? 'Greenhouse' }}</v-card-title>
        <v-card-actions class="mt-3">
            <v-btn
                text="Dashboard"
                class="text-none border"
                to="/greenhouses/dashboard"
            ></v-btn>
            <v-btn
                text="Devices"
                class="text-none border"
                to="/greenhouses/devices"
            ></v-btn>
            <v-btn
                text="Logs"
                class="text-none border"
                to="/greenhouses/logs"
            ></v-btn>
            <v-btn
                text="Settings"
                class="text-none border"
                to="/greenhouses/settings"
            ></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>


const props = defineProps(['name'])
</script>

<style scoped>

</style>