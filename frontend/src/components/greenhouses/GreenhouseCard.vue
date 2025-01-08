<template>
    <v-card class="pa-3">
        <v-card-title>
            <v-icon>mdi-leaf</v-icon>
            <span class="ml-2">{{ name ?? 'Greenhouse' }}</span>
        </v-card-title>
        
        <v-card-subtitle>{{ location ?? 'Field A' }}</v-card-subtitle>
        
        <v-card-actions class="mt-5 px-5 d-flex flex-wrap">
            <v-btn class="border text-none" variant="outlined">
                <v-icon>mdi-cog</v-icon>
                <span class="ml-1">Settings</span>
            </v-btn>
            <v-btn class="border text-none" variant="outlined">
                <v-icon>mdi-delete</v-icon>
                <span class="ml-1">Delete</span>
            </v-btn>
            <v-btn class="text-none bg-white" to="/greenhouses/dashboard">
                <span class="mr-1">View Dashboard</span>
                <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
//

const props = defineProps(['name', 'location'])
</script>

<style scoped>

</style>