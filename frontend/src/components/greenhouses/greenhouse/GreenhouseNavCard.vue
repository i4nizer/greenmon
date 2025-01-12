<template>
    <v-card class="pa-3">
        <v-card-title>{{ name ?? 'Greenhouse' }}</v-card-title>
        <v-card-actions class="mt-3">
            <v-btn
                text="Dashboard"
                class="text-none border"
                :to="`/greenhouses/${id}/dashboard`"
            ></v-btn>
            <v-btn
                text="Devices"
                class="text-none border"
                :to="`/greenhouses/${id}/devices`"
            ></v-btn>
            <v-btn
                text="Logs"
                class="text-none border"
                :to="`/greenhouses/${id}/logs`"
            ></v-btn>
            <v-btn
                text="Settings"
                class="text-none border"
                :to="`/greenhouses/${id}/settings`"
            ></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>


const props = defineProps(['id', 'name'])
</script>

<style scoped>

</style>