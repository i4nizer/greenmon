<template>
    <v-card class="bg-transparent border pa-2">
        <v-card-title>Recent Activity</v-card-title>
        <v-card-text>
            <ul class="pt-2 px-4 d-flex flex-column ga-3">
                <li v-for="a in activities">{{ a?.message ?? 'Activity' }}</li>
            </ul>
        </v-card-text>
    </v-card>
</template>

<script setup>
//

const props = defineProps(['activities'])
</script>

<style scoped></style>
